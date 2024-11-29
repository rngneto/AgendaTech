from rest_framework import viewsets
from django.shortcuts import redirect
from django.http import HttpResponse, JsonResponse
import json

def home(request):
    return HttpResponse('<h1>Back-end da Agenda Tech!</h1>')

def teste(request):
    # Retornando uma resposta JSON em vez de HTML
    data = {
        'mensagem': 'Backend está funcionando e recebendo requisições do frontend!'
    }
    return JsonResponse(data)
