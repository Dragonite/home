from django.db import models

# Create your models here.

class Achievement(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    priority = models.IntegerField(default=0)
    link = models.URLField(blank=True, null=True)
    year = models.IntegerField(blank=True, null=True)
    image = models.ImageField(upload_to='images/projects/', blank=True, null=True)

    def __str__(self):
        return self.name

class Certification(models.Model):
    name = models.CharField(max_length=255)
    identifier = models.CharField(max_length=100, blank=True)
    credential_id = models.CharField(max_length=100, blank=True)
    description = models.TextField()
    issued_by = models.CharField(max_length=255)
    issued_date = models.DateField()
    link = models.URLField(blank=True, null=True)
    certification_file = models.FileField(upload_to='files/certifications/', blank=True, null=True)
    image = models.ImageField(upload_to='images/certifications/', blank=True, null=True)

    def __str__(self):
        return self.name
