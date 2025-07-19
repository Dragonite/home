from django.contrib import admin
from .models import Skill, Project

# Register your models here.
admin.site.register(Skill)
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'short_description', 'priority', 'featured', 'year', 'link', 'image', 'get_skills']
    filter_horizontal = ['skills']
    
    def get_skills(self, obj):
        return ", ".join([skill.name for skill in obj.skills.all()])
    get_skills.short_description = 'Skills'