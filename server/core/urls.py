from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
from django.conf import settings
from django_otp.admin import OTPAdminSite

admin.site.site_header = "Haolin's Portfolio"
admin.site.site_title = "Haolin's Portfolio"
admin.site.index_title = "Portfolio Administration"

urlpatterns = [
    path('test/', lambda request: HttpResponse("Hello!"), name='test'),
]

# Manage OTP 
if settings.DEBUG == False:
    admin.site.__class__ = OTPAdminSite
