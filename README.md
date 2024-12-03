# AgendaTech

AgendaTech é um projeto de agenda eletrônica que exibe eventos de tecnologia em uma determinada cidade. Este projeto é dividido em duas partes: **backend (Django)** e **frontend (React)**.

## Estrutura do Projeto


## Pré-requisitos

- **Git**: Para clonar o repositório.
- **Python 3.12**: Para rodar o backend (Django).
- **Node.js (versão 18 ou superior)**: Para rodar o frontend (React).
- **Docker (opcional)**: Para rodar o ambiente em contêineres, caso desejado.

---

## Clonando o Repositório

Clone o repositório para o seu computador:

```bash
git clone https://github.com/rngneto/AgendaTech.git
```

## Entre na pasta do projeto:

```bash
cd AgendaTech
```
## Configurando o Backend (Django)
Navegue até a pasta do backend:
```bash
cd back
```
## Crie e ative o ambiente virtual (venv):

## No Windows:
```bash
python -m venv venv
venv\Scripts\activate
```
## Instale as dependências do backend:
```bash
pip install -r requirements.txt
```
## Execute as migrações do banco de dados:
```bash
python manage.py migrate
```
## Inicie o servidor do backend:
```bash
python manage.py runserver
```
 O servidor estará rodando em: http://127.0.0.1:8000/

---

## Configurando o Frontend (React)
Navegue até a pasta do frontend:

```bash
cd ../front
```
## Instale as dependências do frontend:
```bash
npm install
```
 O servidor estará rodando em: http://localhost:3000/

---
## Estrutura dos Endpoints
Backend:

http://127.0.0.1:8000/api/teste/

## Dependências
Backend (requirements.txt):
```bash
Django==5.1.3
djangorestframework==3.15.2
asgiref==3.8.1
sqlparse==0.5.2
tzdata==2024.2
```
Frontend (package.json):
- **React** e suas dependências.
- **Axios**: Para requisições HTTP entre frontend e backend.
- **React Router Dom**: Para navegação no frontend.

