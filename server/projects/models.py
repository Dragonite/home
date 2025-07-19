from django.db import models

# Create your models here.

class Skill(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=100, unique=True)
    short_description = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='images/projects/', blank=True, null=True)
    priority = models.IntegerField(default=0)
    featured = models.BooleanField(default=False)
    year = models.IntegerField(blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    skills = models.ManyToManyField(Skill, related_name='projects', blank=True)

    def __str__(self):
        return self.name
