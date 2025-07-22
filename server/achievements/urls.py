from django.urls import path
from . import views

urlpatterns = [
    path('achievements/', views.AchievementView.as_view(), name='achievement-list'),
    path('certifications/', views.CertificationView.as_view(), name='certification-list'),
]