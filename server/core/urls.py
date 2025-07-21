from django.contrib import admin
from django.urls import path
from django.conf import settings
from django_otp.admin import OTPAdminSite
from . import views

admin.site.site_header = "Haolin's Portfolio"
admin.site.site_title = "Haolin's Portfolio"
admin.site.index_title = "Portfolio Administration"

urlpatterns = [
    path('config/', views.ConfigView.as_view(), name='config'),
]

# Manage OTP 
if settings.DEBUG == False:
    admin.site.__class__ = OTPAdminSite
