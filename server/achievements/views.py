from rest_framework.views import APIView
from collections import defaultdict
from .models import Achievement, Certification
from .serializers import AchievementSerializer, CertificationSerializer
from backend.utils import generate_response

class AchievementView(APIView):
    def get(self, request):
        achievements = Achievement.objects.all()
        serialized = AchievementSerializer(achievements, many=True)
        return generate_response(serialized.data, "achievements")

class CertificationView(APIView):
    def get(self, request):
        certifications = Certification.objects.all().order_by('issued_by', '-issued_date')
        grouped = defaultdict(list)
        for cert in certifications:
            serialized_cert = CertificationSerializer(cert).data
            grouped[cert.issued_by].append(serialized_cert)
        
        return generate_response(grouped, "certifications")