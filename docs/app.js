(() => {
  "use strict";

  document.body.classList.add("loading");

  // Loader
  const loader = document.getElementById("loader");
  const bar = document.getElementById("loaderBar");
  const pct = document.getElementById("loaderPct");
  let progress = 0;

  const loaderTimer = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 4;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loaderTimer);
      setTimeout(() => {
        loader.classList.add("is-done");
        document.body.classList.remove("loading");
      }, 280);
    }
    bar.style.width = `${progress}%`;
    pct.textContent = `${progress}%`;
  }, 70);

  // Sticky header state
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });

  // Reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Animated count
  const counters = document.querySelectorAll("[data-count]");
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count || 0);
      const start = performance.now();
      const duration = 900;

      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased);
        if (t < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.8 });

  counters.forEach((el) => counterObserver.observe(el));

  // Custom cursor
  const dot = document.querySelector(".cursor--dot");
  const ring = document.querySelector(".cursor--ring");
  let mouseX = innerWidth / 2, mouseY = innerHeight / 2;
  let ringX = mouseX, ringY = mouseY;

  addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX - 2.5}px, ${mouseY - 2.5}px)`;
  }, { passive: true });

  const cursorLoop = () => {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    ring.style.transform = `translate(${ringX - 17}px, ${ringY - 17}px)`;
    requestAnimationFrame(cursorLoop);
  };
  cursorLoop();

  document.querySelectorAll("a, .magnetic").forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });

  // Magnetic buttons
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });

  // Hero visual parallax
  const visual = document.getElementById("heroVisual");
  const mascot = document.getElementById("mascot");

  if (visual && mascot && matchMedia("(pointer:fine)").matches) {
    visual.addEventListener("mousemove", (e) => {
      const r = visual.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      mascot.style.transform = `translate3d(${nx * 15}px, ${ny * 10}px, 0) scale(1.035)`;
    });
    visual.addEventListener("mouseleave", () => {
      mascot.style.transform = "";
    });
  }

  // Background data network
  const canvas = document.getElementById("dataCanvas");
  const ctx = canvas.getContext("2d");
  let nodes = [];
  let w = 0, h = 0, dpr = 1;

  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth;
    h = innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(72, Math.max(28, Math.floor(w / 24)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.1 + 0.5
    }));
  };

  const drawNetwork = () => {
    ctx.clearRect(0, 0, w, h);

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;

      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,45,45,.26)";
      ctx.fill();
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 105) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(255,28,28,${(1 - dist / 105) * 0.055})`;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawNetwork);
  };

  addEventListener("resize", resize, { passive: true });
  resize();
  drawNetwork();
})();