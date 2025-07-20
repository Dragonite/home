from django.apps import AppConfig


class CoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'core'
    
    def ready(self):
        from django.apps import apps
        from django.contrib import admin
        
        try:
            apps.get_app_config('otp_static').verbose_name = 'Backup Codes'
            apps.get_app_config('otp_totp').verbose_name = 'Authenticator Apps'
            
            # Override the get_app_list method
            original_get_app_list = admin.site.get_app_list
            
            def custom_get_app_list(self, request, app_label=None):
                app_list = original_get_app_list(request, app_label)
                
                # Find and merge OTP apps into auth
                auth_app = None
                otp_models = []
                
                for app in app_list[:]:
                    if app['app_label'] == 'auth':
                        auth_app = app
                    elif app['name'] in ['Backup Codes', 'Authenticator Apps']:
                        otp_models.extend(app['models'])
                        app_list.remove(app)
                
                if auth_app and otp_models:
                    auth_app['models'].extend(otp_models)
                
                return app_list
            
            # Monkey patch the method
            admin.site.get_app_list = custom_get_app_list.__get__(admin.site, admin.AdminSite)
            
        except Exception as e:
            print(f"Error in ready(): {e}")
