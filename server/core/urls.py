from django.urls import path
from . import views

urlpatterns = [
    path('config/', views.ConfigView.as_view(), name='config'),
]
