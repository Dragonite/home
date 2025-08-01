# Generated by Django 5.2.4 on 2025-07-19 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_alter_project_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='featured',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='project',
            name='link',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='project',
            name='priority',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='project',
            name='year',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
