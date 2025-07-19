from django.urls import path
from . import views

urlpatterns = [
    path('skills/', views.SkillListView.as_view(), name='skill-list'),
    path('projects/', views.ProjectListView.as_view(), name='project-list'),
    path('projects/<int:pk>/', views.ProjectDetailView.as_view(), name='project-detail'),
]