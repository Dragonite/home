from django.db import models

# Create your models here.

class GlobalConfiguration(models.Model):
    resume_url = models.URLField(blank=True, null=True, verbose_name="Resume URL")
    github_url = models.URLField(blank=True, null=True, verbose_name="GitHub URL")
    linkedin_url = models.URLField(blank=True, null=True, verbose_name="LinkedIn URL")
    email = models.EmailField(blank=True, null=True)

    def __str__(self):
        return 'Configuration'