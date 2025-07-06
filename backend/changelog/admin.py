from django.contrib import admin
from .models import Changelog
# Register your models here.

admin.site.register(Changelog)
class ChangelogAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'description')