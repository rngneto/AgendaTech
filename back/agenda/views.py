from rest_framework import viewsets
from django.shortcuts import redirect
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Usuario
import json

def home(request):
    return HttpResponse('<h1>Back-end da Agenda Tech!</h1>')

def teste(request):
    # Retornando uma resposta JSON em vez de HTML
    data = {
        'mensagem': 'Backend está funcionando e recebendo requisições do frontend!'
    }
    return JsonResponse(data)

@csrf_exempt
def cadastrar_usuario(request):
    if request.method == 'POST':
        try:
            dados = json.loads(request.body)
            usuario = Usuario.objects.create(
                nome=dados.get('nome'),
                sobrenome=dados.get('sobrenome'),
                senha=dados.get('senha')  # Não use senha em texto puro em produção!
            )
            return JsonResponse({
                "mensagem": "Usuário cadastrado com sucesso!",
                "nome": usuario.nome,
                "sobrenome": usuario.sobrenome
            }, status=201)
        except Exception as e:
            return JsonResponse({"erro": str(e)}, status=400)
    return JsonResponse({"erro": "Método não permitido"}, status=405)

def listar_usuarios(request):
    if request.method == 'GET':
        usuarios = Usuario.objects.all()
        usuarios_data = [
            {'id': u.id, 'nome': u.nome, 'sobrenome': u.sobrenome}
            for u in usuarios
        ]
        return JsonResponse(usuarios_data, safe=False)
