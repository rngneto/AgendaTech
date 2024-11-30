from rest_framework import viewsets
from django.shortcuts import redirect
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

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
        dados = json.loads(request.body)

        # Simula salvar no banco de dados (pode usar um modelo real depois)
        usuario = {
            "nome": dados.get("nome"),
            "sobrenome": dados.get("sobrenome"),
            "senha": dados.get("senha"),  # Não use senha em texto puro no real
        }
        # Retorna confirmação
        return JsonResponse({"mensagem": "Usuário cadastrado com sucesso!", "usuario": usuario}, status=201)

    return JsonResponse({"erro": "Método não permitido"}, status=405)
