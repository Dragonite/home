from django.db import models

class AdminExternalService(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField()
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0, help_text="Display order")

    class Meta:
        ordering = ['order', 'name']
    
    def __str__(self):
        return self.name

class GlobalConfiguration(models.Model):
    resume_file = models.FileField(
        upload_to='resumes/', 
        blank=True, 
        null=True,
        verbose_name="Resume File",
        help_text="Upload your resume (PDF recommended)"
    )
    github_url = models.URLField(blank=True, null=True, verbose_name="GitHub URL")
    linkedin_url = models.URLField(blank=True, null=True, verbose_name="LinkedIn URL")
    email = models.EmailField(blank=True, null=True)
    portfolio_github_url = models.URLField(blank=True, null=True, verbose_name="Portfolio GitHub URL")

    def __str__(self):
        return 'Configuration'
    
    @property
    def resume_url(self):
        """Get the URL for the uploaded resume file"""
        if self.resume_file:
            return self.resume_file.url
        return None