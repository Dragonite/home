from django.db import models

# Create your models here.

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

    def __str__(self):
        return 'Configuration'
    
    @property
    def resume_url(self):
        """Get the URL for the uploaded resume file"""
        if self.resume_file:
            return self.resume_file.url
        return None