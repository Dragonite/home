from django.contrib import admin
from .models import Achievement, Certification

# Register your models here.
admin.site.register(Achievement)
@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ['name', 'issued_by', 'issued_date', 'certification_file']
