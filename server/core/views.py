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