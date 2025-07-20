"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django_otp.admin import OTPAdminSite
from django.apps import apps

admin.site.site_header = "Haolin's Portfolio"
admin.site.site_title = "Haolin's Portfolio"
admin.site.index_title = "Portfolio Administration"

# Override django-otp app names for cleaner look
apps.get_app_config('otp_static').verbose_name = 'Backup Codes'
apps.get_app_config('otp_totp').verbose_name = 'Authenticator Tokens'

# Manage OTP 
if settings.DEBUG == False:
    admin.site.__class__ = OTPAdminSite

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog.urls')),
    path('api/', include('projects.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
