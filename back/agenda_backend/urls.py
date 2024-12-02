from django.contrib import admin
from django.urls import path, include
from agenda.views import home, limpar_bd  # Importar as views necessárias

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),  # Página inicial
    path('limpar_bd/', limpar_bd, name='limpar_bd'),  # Adiciona a rota sem prefixo
    path('api/', include('agenda.urls')),  # Inclui as rotas do app 'agenda' com prefixo
]
