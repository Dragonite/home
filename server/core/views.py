from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.db import connection
from django.utils import timezone
from rest_framework.views import APIView
from .models import GlobalConfiguration
from .serializers import ConfigSerializer
from backend.utils import generate_response
from django.shortcuts import get_object_or_404

class ConfigView(APIView):
    def get(self, request):
        config = get_object_or_404(GlobalConfiguration, pk=1)
        serializer = ConfigSerializer(config)
        return generate_response(serializer.data, "configuration")
    
@csrf_exempt
@require_http_methods(["GET", "POST"])
def health_check(request):
    """Simple health check endpoint that touches the database"""
    try:
        # Simple database query to keep connection alive
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            result = cursor.fetchone()
        return JsonResponse({
            "status": "healthy",
            "database": "connected",
            "timestamp": timezone.now().isoformat()
        })
    except Exception as e:
        return JsonResponse({
            "status": "unhealthy", 
            "error": str(e),
            "timestamp": timezone.now().isoformat()
        }, status=500)