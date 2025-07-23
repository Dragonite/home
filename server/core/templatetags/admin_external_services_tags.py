from django import template
from core.models import AdminExternalService

register = template.Library()

@register.simple_tag
def get_external_services():
    return AdminExternalService.objects.filter(is_active=True).order_by('order', 'name')