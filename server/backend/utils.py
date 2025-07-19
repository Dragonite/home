from rest_framework.response import Response
from django.utils import timezone
import uuid

def generate_response(data):
    metadata = {
        'correlation_id': str(uuid.uuid4()),
        'timestamp': timezone.now(),
        'count': len(data) or 0,
    }
    
    return Response({
        'metadata': metadata,
        'data': data
    })