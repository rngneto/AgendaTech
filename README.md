AgendaTech é um projeto de agenda eletrônica que exibe eventos de tecnologia em uma determinada cidade. Este projeto é dividido em duas partes: **backend** (Django) e **frontend** (React).

## Estrutura do Projeto

```text
AgendaTech/
├── back/             # Backend (Django)
├── front/            # Frontend (React)
└── README.md         # Instruções para rodar o projeto
Pré-requisitos
Git: Para clonar o repositório.
Python 3.12: Para rodar o backend (Django).
Node.js (versão 18 ou superior): Para rodar o frontend (React).
Docker (opcional): Para rodar o ambiente em contêineres, caso desejado.
Clonando o Repositório
Clone o repositório para o seu computador:

bash
Copiar código
git clone https://github.com/rngneto/AgendaTech.git
Entre na pasta do projeto:

bash
Copiar código
cd AgendaTech
Configurando o Backend (Django)
Navegue até a pasta back:

bash
Copiar código
cd back
Criar e ativar o ambiente virtual (venv):

bash
Copiar código
python -m venv venv
venv\Scripts\activate
Instalar as dependências do backend:

bash
Copiar código
pip install -r requirements.txt
Rodar as migrações do banco de dados:

bash
Copiar código
python manage.py migrate
Iniciar o servidor do backend:

bash
Copiar código
python manage.py runserver
O servidor estará rodando em: http://127.0.0.1:8000/
Configurando o Frontend (React)
Navegue até a pasta front:

bash
Copiar código
cd ..\front
Instalar as dependências do frontend:

bash
Copiar código
npm install
Iniciar o servidor do frontend:

bash
Copiar código
npm start
O servidor estará rodando em: http://localhost:3000/
Testando a Comunicação entre Frontend e Backend
A aplicação frontend faz uma requisição para o backend para garantir que ambos estão se comunicando.
Ao abrir o navegador em http://localhost:3000/, você poderá ver uma mensagem indicando que a comunicação está funcionando corretamente.
Verifique o console do navegador para ver a mensagem de resposta do backend.
Rodando com Docker (Opcional)
Se preferir rodar o ambiente com Docker, siga as instruções abaixo:

Certifique-se de estar na pasta principal do projeto:

bash
Copiar código
cd AgendaTech
Rodar o Docker Compose:

bash
Copiar código
docker-compose up --build
O backend estará disponível em http://127.0.0.1:8000/
O frontend estará disponível em http://localhost:3000/
Estrutura dos Endpoints
Backend:
http://127.0.0.1:8000/api/teste/: Endpoint para testar a comunicação entre frontend e backend.
Dependências
Backend (requirements.txt)
Django==5.1.3
djangorestframework==3.15.2
asgiref==3.8.1
sqlparse==0.5.2
tzdata==2024.2
Frontend (package.json)
React e suas dependências.
Axios: Para requisições HTTP entre frontend e backend.
React Router Dom: Para navegação no frontend.
Problemas Comuns
Erro de CORS:

Certifique-se de que o django-cors-headers está instalado e configurado no backend para permitir requisições entre frontend e backend.
Erro 404 no Backend:

Verifique se o servidor Django está rodando corretamente.
Certifique-se de que está acessando o endpoint correto (/api/teste/).
