from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Skill, Project
from .serializers import SkillSerializer, ProjectSerializer
from backend.utils import generate_response
from django.shortcuts import get_object_or_404

class SkillListView(APIView):
    def get(self, request):
        skills = Skill.objects.all()
        serializer = SkillSerializer(skills, many=True)
        return generate_response(serializer.data, "skills")

class ProjectListView(APIView):
    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return generate_response(serializer.data, "projects")

class ProjectDetailView(APIView):
    def get(self, request, pk):
        project = get_object_or_404(Project, pk=pk)
        serializer = ProjectSerializer(project)
        return generate_response(serializer.data, "project")