from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.urls import path
from . import views

urlpatterns = [
    path('teste/', views.teste, name='teste'),  # Rota de teste para garantir comunicação
]

urlpatterns = [
    path('cadastrar_usuario/', views.cadastrar_usuario, name='cadastrar_usuario'),
]