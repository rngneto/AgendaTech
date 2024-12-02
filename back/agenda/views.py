from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.paginator import Paginator
from .models import Usuario, Evento
from .serializers import UsuarioSerializer, EventoSerializer
import json


def home(request):
    """Página inicial do backend com links para os endpoints"""
    endpoints = [
        {"path": "/api/", "name": "Home"},
        {"path": "/api/teste/", "name": "Teste"},
        {"path": "/api/cadastrar_usuario/", "name": "Cadastrar Usuário"},
        {"path": "/api/listar_usuarios/", "name": "Listar Usuários"},
        {"path": "/api/listar_usuarios_json/", "name": "Listar Usuários JSON"},
        {"path": "/api/cadastrar_evento/", "name": "Cadastrar Evento"},
        {"path": "/api/listar_eventos/", "name": "Listar Eventos"},
    ]

    html = """
    <html>
        <head>
            <title>Agenda Tech - Backend</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                h1 {
                    color: #333;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                li {
                    margin: 10px 0;
                }
                a {
                    text-decoration: none;
                    color: #007bff;
                }
                a:hover {
                    color: #0056b3;
                }
            </style>
        </head>
        <body>
            <h1>Back-end da Agenda Tech</h1>
            <p>Bem-vindo ao backend! Aqui estão os endpoints disponíveis:</p>
            <ul>
    """
    for endpoint in endpoints:
        html += f'<li><a href="{endpoint["path"]}">{endpoint["name"]}</a></li>'
    
    html += """
            </ul>
        </body>
    </html>
    """
    return HttpResponse(html)


def teste(request):
    """Endpoint de teste para verificar o funcionamento do backend"""
    data = {
        'mensagem': 'Backend está funcionando e recebendo requisições do frontend!'
    }
    return JsonResponse(data)


@csrf_exempt
def cadastrar_usuario(request):
    """Cadastra um novo usuário"""
    if request.method == 'POST':
        try:
            dados = json.loads(request.body)
            usuario = Usuario.objects.create(
                nome=dados.get('nome'),
                sobrenome=dados.get('sobrenome'),
                senha=dados.get('senha')  # Atenção: Use hash para senhas em produção
            )
            return JsonResponse({
                "mensagem": "Usuário cadastrado com sucesso!",
                "nome": usuario.nome,
                "sobrenome": usuario.sobrenome
            }, status=201)
        except Exception as e:
            return JsonResponse({"erro": f"Erro ao cadastrar usuário: {str(e)}"}, status=400)
    return JsonResponse({"erro": "Método não permitido"}, status=405)


def listar_usuarios(request):
    """Lista todos os usuários"""
    if request.method == 'GET':
        try:
            usuarios = Usuario.objects.all()
            usuarios_data = [
                {'id': u.id, 'nome': u.nome, 'sobrenome': u.sobrenome}
                for u in usuarios
            ]
            return JsonResponse(usuarios_data, safe=False)
        except Exception as e:
            return JsonResponse({"erro": f"Erro ao listar usuários: {str(e)}"}, status=400)
    return JsonResponse({"erro": "Método não permitido"}, status=405)


def listar_usuarios_json(request):
    """Lista todos os usuários com suporte a caracteres especiais"""
    try:
        usuarios = Usuario.objects.all()
        usuarios_data = [
            {'id': u.id, 'nome': u.nome, 'sobrenome': u.sobrenome}
            for u in usuarios
        ]
        return JsonResponse(usuarios_data, safe=False, json_dumps_params={'ensure_ascii': False})
    except Exception as e:
        return JsonResponse({"erro": f"Erro ao listar usuários: {str(e)}"}, status=400)


@api_view(['POST'])
def cadastrar_evento(request):
    """Cadastra um novo evento"""
    try:
        data = json.loads(request.body)
        evento = Evento.objects.create(
            nome=data.get('nome'),
            data=data.get('data'),
            horario=data.get('horario'),
            tipo=data.get('tipo'),
            local=data.get('local'),
            imagem=data.get('imagem')  # Suporte para imagens
        )
        return JsonResponse({"mensagem": "Evento cadastrado com sucesso!", "id": evento.id}, status=201)
    except Exception as e:
        return JsonResponse({"erro": f"Erro ao cadastrar evento: {str(e)}"}, status=400)


def listar_eventos(request):
    """Lista eventos com suporte a paginação"""
    try:
        eventos = Evento.objects.all().order_by('-data')
        paginator = Paginator(eventos, 9)  # Paginação: 9 eventos por página
        page_number = request.GET.get('page', 1)
        page_obj = paginator.get_page(page_number)

        eventos_serializados = [
            {
                "id": evento.id,
                "nome": evento.nome,
                "data": evento.data.strftime('%Y-%m-%d') if evento.data else None,
                "horario": evento.horario.strftime('%H:%M') if evento.horario else None,
                "tipo": evento.tipo,
                "local": evento.local,
                "imagem": evento.imagem.url if evento.imagem else None,
            }
            for evento in page_obj.object_list
        ]

        return JsonResponse({
            "eventos": eventos_serializados,
            "pagina_atual": page_obj.number,
            "total_paginas": paginator.num_pages,
        }, json_dumps_params={'ensure_ascii': False})
    except Exception as e:
        return JsonResponse({"erro": f"Erro ao listar eventos: {str(e)}"}, status=400)
