from rest_framework import serializers
from .models import Skill, Project

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name']

class ProjectSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ['id', 'name', 'short_description', 'description', 'priority', 'featured', 'year', 'link', 'image', 'skills']
        read_only_fields = ['image']