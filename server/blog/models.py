from django.db import models
from tinymce.models import HTMLField

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Categories"

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    role = models.CharField(max_length=100, blank=True, null=True)
    short_description = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to='images/blog/', blank=True, null=True)
    content = HTMLField()
    categories = models.ManyToManyField(Category, related_name='posts', blank=True)
    created_at = models.DateTimeField()
    is_active = models.BooleanField(default=True, help_text="Show this post on the blog")

    def __str__(self):
        return self.title