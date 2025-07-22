from django.contrib import admin
from .models import GlobalConfiguration
from django.conf import settings
from django_otp.admin import OTPAdminSite

admin.site.site_header = "Haolin's Portfolio"
admin.site.site_title = "Haolin's Portfolio"
admin.site.index_title = "Portfolio Administration"

# Register your models here.
admin.site.register(GlobalConfiguration)

# Manage OTP 
if settings.DEBUG == False:
    admin.site.__class__ = OTPAdminSite
