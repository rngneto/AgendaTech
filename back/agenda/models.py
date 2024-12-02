from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=100)
    sobrenome = models.CharField(max_length=100)
    senha = models.CharField(max_length=255)  # Use hashing em produção

    def __str__(self):
        return f"{self.nome} {self.sobrenome}"

class Evento(models.Model):
    nome = models.CharField(max_length=200)
    data = models.DateField(null=True, blank=True)
    horario = models.TimeField(null=True, blank=True)
    tipo = models.CharField(max_length=50, choices=[('presencial', 'Presencial'), ('online', 'Online'), ('hibrido', 'Híbrido')])
    local = models.CharField(max_length=255, null=True, blank=True)
    imagem = models.ImageField(upload_to='eventos/', null=True, blank=True)
    link = models.URLField(null=True, blank=True)  # Link para mais informações
    palestrantes = models.CharField(max_length=500, null=True, blank=True)  # Lista de palestrantes (até 3, separados por vírgula)
    descricao = models.TextField(null=True, blank=True)  # Descrição detalhada do evento

    def __str__(self):
        return self.nome