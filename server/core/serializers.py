from rest_framework import serializers
from .models import GlobalConfiguration

class ConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = GlobalConfiguration
        exclude = ['id']