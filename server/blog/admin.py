from django.contrib import admin

# Register your models here.
from .models import Category, BlogPost

admin.site.register(Category)

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'get_categories', 'created_at']
    prepopulated_fields = {'slug': ('title',)}
    filter_horizontal = ['categories']
    
    def get_categories(self, obj):
        return ", ".join([category.name for category in obj.categories.all()])
    get_categories.short_description = 'Categories'