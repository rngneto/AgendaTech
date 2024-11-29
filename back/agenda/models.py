from django.db import models

class Evento(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField()
    data = models.DateField()
    local = models.CharField(max_length=200)

    def __str__(self):
        return self.titulo
