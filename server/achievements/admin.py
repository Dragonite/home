from django.contrib import admin
from .models import Achievement, Certification

@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ['name', 'is_active', 'link', 'year', 'image']
@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ['name', 'is_active', 'issued_by', 'issued_date', 'certification_file']
