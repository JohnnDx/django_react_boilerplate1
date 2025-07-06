from ninja import Router
from .models import Changelog
from typing import List
from .schemas import ChangelogSchema
router = Router()

@router.get("/", response=List[ChangelogSchema],auth=None)
def list_changelogs(request):
    changelogs = Changelog.objects.all().order_by('-created_on')  
    return changelogs
