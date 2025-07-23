from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category, BlogPost
from .serializers import CategorySerializer, BlogPostSerializer
from backend.utils import generate_response
from django.shortcuts import get_object_or_404

class CategoryListView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return generate_response(serializer.data, "categories")

class BlogPostListView(APIView):
    def get(self, request):
        posts = BlogPost.objects.filter(is_active=True).order_by('-created_at')
        serializer = BlogPostSerializer(posts, many=True)
        return generate_response(serializer.data, "posts")

class BlogPostDetailView(APIView):
    def get(self, request, pk):
        post = get_object_or_404(BlogPost, pk=pk, is_active=True)
        serializer = BlogPostSerializer(post)
        return generate_response(serializer.data, "post")