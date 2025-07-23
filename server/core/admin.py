from django.contrib import admin
from .models import AdminExternalService, GlobalConfiguration
from django.conf import settings
from django_otp.admin import OTPAdminSite

admin.site.site_header = "Haolin's Portfolio"
admin.site.site_title = "Haolin's Portfolio"
admin.site.index_title = "Portfolio Administration"

# Register your models here.
admin.site.register(GlobalConfiguration)

@admin.register(AdminExternalService)
class AdminExternalServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'url', 'is_active', 'order']
    list_editable = ['is_active', 'order']
    list_filter = ['is_active']
    ordering = ['order', 'name']

# Manage OTP 
if settings.DEBUG == False:
    admin.site.__class__ = OTPAdminSite
