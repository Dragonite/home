from rest_framework.response import Response
from django.utils import timezone
import uuid

def generate_response(data, data_name='data'):
    metadata = {
        'correlation_id': str(uuid.uuid4()),
        'timestamp': timezone.now(),
    }

    response_data = {
        data_name: data,
    }
    
    if isinstance(data, (list, tuple)) or hasattr(data, 'count'):
        response_data['count'] = len(data)
    
    return Response({
        'metadata': metadata,
        'data': response_data
    })