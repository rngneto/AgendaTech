from django.contrib import admin
from django.urls import path, include
from agenda.views import home  # Importar a view home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),  # Página de boas-vindas na raiz
    path('api/', include('agenda.urls')),  # Inclui as URLs do app 'agenda'
]