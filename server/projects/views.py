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
        featured = request.GET.get('featured')
        if featured == 'true':
            projects = Project.objects.filter(featured=True, is_active=True).order_by('priority')
        elif featured == 'false':
            projects = Project.objects.filter(featured=False, is_active=True).order_by('priority')
        else:
            projects = Project.objects.filter(is_active=True).order_by('priority')
        serializer = ProjectSerializer(projects, many=True)
        return generate_response(serializer.data, "projects")

class ProjectDetailView(APIView):
    def get(self, request, pk):
        project = get_object_or_404(Project, pk=pk, is_active=True)
        serializer = ProjectSerializer(project)
        return generate_response(serializer.data, "project")