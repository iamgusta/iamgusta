<div align="center">

# ⌁ GUSTAVO LOPES ⌁

### DATA ENGINEERING • DATABASES • DATA SYSTEMS

<img
  src="https://readme-typing-svg.herokuapp.com/?font=Orbitron&size=22&duration=2600&pause=700&color=00FFE0&center=true&vCenter=true&width=1000&lines=%3E+INITIALIZING+DATA+ENGINEER...;%3E+CONNECTING+TO+DATABASE...;%3E+BUILDING+DATA+PIPELINES...;%3E+PROCESSING+RAW+DATA...;%3E+SQL+%7C+PYTHON+%7C+AIRFLOW+%7C+DOCKER;%3E+FROM+RAW+DATA+TO+INTELLIGENCE."
/>

<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-iamgustavoti-00FFE0?style=for-the-badge&logo=linkedin&logoColor=black)](https://www.linkedin.com/in/iamgustavoti)
[![Email](https://img.shields.io/badge/Email-Contato-00FFE0?style=for-the-badge&logo=microsoftoutlook&logoColor=black)](mailto:gustavolopesti@outlook.com)
[![GitHub](https://img.shields.io/badge/GitHub-Gustavo-00FFE0?style=for-the-badge&logo=github&logoColor=black)](https://github.com/SEU_USUARIO)

<br>

```text
SYSTEM STATUS
──────────────────────────────────────────
USER.............. Gustavo Lopes
ROLE.............. Future Data Engineer
LOCATION.......... Arapiraca - AL, Brasil
EDUCATION......... Sistemas de Informação
FOCUS............. Data Engineering
STATUS............ BUILDING THE FUTURE...
──────────────────────────────────────────
```

</div>

---

# 🧬 `WHO_AM_I`

```python
class GustavoLopes:

    def __init__(self):
        self.role = "Future Data Engineer"
        self.degree = "Information Systems"
        self.location = "Arapiraca - AL, Brazil"

        self.languages = [
            "Python",
            "SQL"
        ]

        self.databases = [
            "MySQL",
            "SQLite",
            "Oracle"
        ]

        self.data_engineering = [
            "ETL",
            "Data Warehouse",
            "Data Modeling",
            "Apache Airflow",
            "Docker"
        ]

    def mission(self):
        return """
        Transform raw data into
        reliable, structured and
        scalable information.
        """


gustavo = GustavoLopes()

print(gustavo.mission())
```

```text
OUTPUT:

Transform raw data into
reliable, structured and
scalable information.
```

---

# ⚡ `DATA CORE`

<div align="center">

<img
src="https://readme-typing-svg.herokuapp.com/?font=Fira+Code&size=18&duration=1800&pause=400&color=00FFE0&center=true&vCenter=true&width=900&lines=SELECT+*+FROM+raw_data%3B;EXTRACT+%E2%86%92+TRANSFORM+%E2%86%92+LOAD;Building+dim_cliente...;Building+dim_produto...;Building+fato_vendas...;Pipeline+completed+successfully+%E2%9C%94"
/>

</div>

```text
                 ╭─────────────────╮
                 │    RAW DATA     │
                 │  010101101001   │
                 ╰────────┬────────╯
                          │
                          ▼
                ┌──────────────────┐
                │      PYTHON      │
                │      PANDAS      │
                └────────┬─────────┘
                         │
                    TRANSFORM
                         │
                         ▼
          ┌────────────────────────────┐
          │        DATA PIPELINE       │
          │                            │
          │   EXTRACT → TRANSFORM      │
          │              ↓             │
          │             LOAD           │
          └─────────────┬──────────────┘
                        │
                        ▼
               ╔════════════════╗
               ║   DATABASE     ║
               ║                ║
               ║  ▣ ▣ ▣ ▣ ▣   ║
               ║  ▣ ▣ ▣ ▣ ▣   ║
               ╚═══════╤════════╝
                       │
                       ▼
               DATA WAREHOUSE
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
            SQL              ANALYTICS
             │                   │
             └────────┬──────────┘
                      ▼
                 INTELLIGENCE
```

---

# 🔄 `DATA PIPELINE`

```mermaid
flowchart LR

    RAW[(📦 Raw Data)]

    PY[🐍 Python]

    ETL[⚙️ ETL]

    DB[(🗄️ Database)]

    DW[(🏢 Data Warehouse)]

    SQL[🔍 SQL]

    BI[📊 Analytics]

    RAW --> PY

    PY --> ETL

    ETL --> DB

    DB --> DW

    DW --> SQL

    SQL --> BI
```

---

# 🧠 `CURRENT_FOCUS`

```sql
SELECT
    skill,
    status
FROM
    engineering_stack
WHERE
    developer = 'Gustavo Lopes';
```

```text
+------------------------+----------------------+
| SKILL                  | STATUS               |
+------------------------+----------------------+
| Python                 | █████████░ Learning  |
| SQL                    | █████████░ Building  |
| MySQL                  | █████████░ Building  |
| Data Warehouse         | ████████░░ Learning  |
| ETL / ELT              | ████████░░ Learning  |
| Apache Airflow         | ███████░░░ Learning  |
| Docker                 | ███████░░░ Learning  |
| Data Engineering       | ████████░░ Evolving  |
+------------------------+----------------------+
```

---

# 🛠️ `TECH STACK`

<div align="center">

### DATABASES

<img src="https://skillicons.dev/icons?i=mysql,sqlite&theme=dark" height="55"/>

<img src="https://img.icons8.com/color/96/oracle-logo.png" height="55"/>

<br><br>

### LANGUAGES

<img src="https://skillicons.dev/icons?i=python,java,js&theme=dark" height="55"/>

<br><br>

### DATA & ENGINEERING

<img src="https://img.shields.io/badge/Apache_Airflow-017CEE?style=for-the-badge&logo=apacheairflow&logoColor=white"/>
<img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white"/>
<img src="https://img.shields.io/badge/SQLAlchemy-D71F00?style=for-the-badge&logo=sqlalchemy&logoColor=white"/>
<img src="https://img.shields.io/badge/ETL-00FFE0?style=for-the-badge&logoColor=black"/>
<img src="https://img.shields.io/badge/Data_Warehouse-00FFE0?style=for-the-badge&logoColor=black"/>

<br><br>

### INFRASTRUCTURE & TOOLS

<img src="https://skillicons.dev/icons?i=docker,git,github,vscode,linux&theme=dark" height="55"/>

</div>

---

# 🛰️ `DATA ENGINEERING ARCHITECTURE`

```mermaid
flowchart TD

    SOURCE[
        📦 DATA SOURCES
        CSV / APIs / Databases
    ]

    INGEST[
        🐍 INGESTION
        Python
    ]

    TRANSFORM[
        ⚙️ TRANSFORMATION
        Pandas
    ]

    ORCHESTRATION[
        🌬️ ORCHESTRATION
        Apache Airflow
    ]

    STORAGE[
        🗄️ STORAGE
        MySQL
    ]

    DW[
        🏢 DATA WAREHOUSE
    ]

    ANALYTICS[
        📊 ANALYTICS
        SQL / BI
    ]

    SOURCE --> INGEST

    INGEST --> TRANSFORM

    TRANSFORM --> ORCHESTRATION

    ORCHESTRATION --> STORAGE

    STORAGE --> DW

    DW --> ANALYTICS
```

---

# 💾 `DATABASE_MODEL`

```text
                  DATA WAREHOUSE
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ▼               ▼                ▼
  dim_cliente      dim_produto      dim_loja
        │               │                │
        └───────────────┼────────────────┘
                        │
                        ▼
                  fato_vendas
                        │
                        ▼
                    dim_data
```

---

# 🚀 `FEATURED_PROJECTS`

## 📊 Data Pipeline Vendas

```text
CSV
 ↓
Python
 ↓
Pandas
 ↓
ETL
 ↓
MySQL
 ↓
Data Warehouse
 ↓
SQL
 ↓
Apache Airflow
 ↓
Docker
```

Projeto desenvolvido para praticar uma arquitetura de **Engenharia de Dados**, desde a ingestão até armazenamento e análise.

`Python` `Pandas` `SQL` `MySQL` `Airflow` `Docker` `ETL`

---

## ☕ Coffee Shop Database

Sistema relacional para gerenciamento de uma cafeteria.

```text
SQLite
   +
SQL
   +
Views
   +
Triggers
   +
Python
```

Aplicação de modelagem relacional, consultas avançadas e automação dentro do banco de dados.

---

## 🎮 CrashGAME

Jogo desenvolvido em Python utilizando Pygame.

```text
Python → Events → Movement → Collision → Score → Game
```

Projeto criado para praticar fundamentos de programação e desenvolvimento de aplicações.

---

## 🛒 E-commerce

Aplicação web de comércio eletrônico com:

```text
Frontend
   +
Backend
   +
Database
   ↓
E-COMMERCE
```

Tecnologias:

`HTML` `CSS` `JavaScript` `PHP` `MySQL`

---

# 📡 `DATA STREAM`

<div align="center">

<img src="https://readme-typing-svg.herokuapp.com/?font=Fira+Code&size=16&duration=900&pause=300&color=00FF9C&center=true&vCenter=true&width=950&lines=%5BINFO%5D+Connecting+to+database...;%5BOK%5D+Database+connection+established.;%5BINFO%5D+Reading+raw+dataset...;%5BINFO%5D+Cleaning+data...;%5BINFO%5D+Transforming+records...;%5BINFO%5D+Loading+Data+Warehouse...;%5BOK%5D+Pipeline+completed.;%5BSYSTEM%5D+Waiting+for+next+execution..."
/>

</div>

---

# 📊 `GITHUB_ANALYTICS`

<div align="center">

<img
  height="180"
  src="https://github-readme-stats.vercel.app/api?username=SEU_USUARIO&show_icons=true&theme=transparent&hide_border=true&title_color=00FFE0&icon_color=00FFE0&text_color=FFFFFF"
/>

<img
  height="180"
  src="https://github-readme-stats.vercel.app/api/top-langs/?username=SEU_USUARIO&layout=compact&theme=transparent&hide_border=true&title_color=00FFE0&text_color=FFFFFF"
/>

</div>

---

# 🔥 `ACTIVITY`

<div align="center">

<img
src="https://github-readme-activity-graph.vercel.app/graph?username=SEU_USUARIO&bg_color=00000000&color=00FFE0&line=00FFE0&point=FFFFFF&area=true&hide_border=true"
/>

</div>

---

# 🐍 `CONTRIBUTION_PIPELINE`

<div align="center">

<p>
  Dados fluindo pelo histórico de contribuições...
</p>

<img
src="https://raw.githubusercontent.com/SEU_USUARIO/SEU_USUARIO/output/github-contribution-grid-snake-dark.svg"
/>

</div>

---

# 🎯 `MISSION`

```python
while True:

    study("Data Engineering")

    build("Data Pipelines")

    learn("Databases")

    improve("SQL")

    automate("Processes")

    transform(
        raw_data="information"
    )
```

```text
MISSION:

> Construir estruturas de dados confiáveis.

> Criar pipelines escaláveis.

> Automatizar processamento de dados.

> Projetar bancos eficientes.

> Transformar dados em informação.

> Evoluir todos os dias.
```

---

# 🛰️ `ROADMAP`

```mermaid
flowchart LR

    A[Python]

    B[SQL]

    C[Databases]

    D[ETL / ELT]

    E[Data Warehouse]

    F[Docker]

    G[Apache Airflow]

    H[Cloud]

    I[Apache Spark]

    J[DATA ENGINEER]

    A --> B

    B --> C

    C --> D

    D --> E

    E --> F

    F --> G

    G --> H

    H --> I

    I --> J
```

---

# 📡 `CONNECT`

<div align="center">

### Interested in Data, Engineering or Databases?

Sempre aberto para trocar conhecimento, discutir projetos e aprender com outros profissionais da área.

<br>

[![LinkedIn](https://img.shields.io/badge/CONNECT_ON_LINKEDIN-00FFE0?style=for-the-badge&logo=linkedin&logoColor=black)](https://www.linkedin.com/in/iamgustavoti)

[![Email](https://img.shields.io/badge/SEND_EMAIL-00FFE0?style=for-the-badge&logo=microsoftoutlook&logoColor=black)](mailto:gustavolopesti@outlook.com)

<br><br>

```text
╔══════════════════════════════════════════════╗
║                                              ║
║              GUSTAVO LOPES                   ║
║                                              ║
║          FUTURE DATA ENGINEER                ║
║                                              ║
║      PYTHON • SQL • DATABASES • DATA         ║
║                                              ║
╚══════════════════════════════════════════════╝
```

<img
src="https://readme-typing-svg.herokuapp.com/?font=Orbitron&size=18&duration=3000&pause=1000&color=00FFE0&center=true&vCenter=true&width=800&lines=Engineering+the+future+with+data.;Building+one+pipeline+at+a+time.;From+raw+data+to+intelligence."
/>

</div>
