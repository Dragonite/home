from rest_framework import serializers
from .models import Category, BlogPost

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class BlogPostSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)
    read_duration = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = ['slug', 'title', 'role', 'short_description', 'image', 'content', 'read_duration', 'categories', 'created_at']

    def get_read_duration(self, obj):
        word_count = len(obj.content.split())
        minutes = word_count // 200
        return "Less than a minute read" if minutes == 0 else "{minutes} minute read".format(minutes=minutes)