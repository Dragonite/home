from django.db import models

# Create your models here.

class Skill(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=100, unique=True)
    skills = models.ManyToManyField(Skill, related_name='projects', blank=True)

    def __str__(self):
        return self.name
