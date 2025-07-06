from django.http import JsonResponse
from .models import Changelog

def changelog_list(request):
    changelogs = Changelog.objects.all()
    data = list(changelogs.values('title', 'description', 'created_on'))
    return JsonResponse(data, safe=False)
