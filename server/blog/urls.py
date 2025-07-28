from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('posts/', views.BlogPostListView.as_view(), name='post-list'),
    path('posts/<slug:slug>/', views.BlogPostDetailView.as_view(), name='post-detail'),
]