from django.urls import path
from . import views

urlpatterns = [
    path('config/', views.ConfigView.as_view(), name='config'),
    path('health/', views.health_check, name='health_check'),
]
