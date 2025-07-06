from ninja import Router
from typing import List
from .models import RoadmapTask, RoadmapCategory
from .schemas import RoadmapTaskSchema, RoadmapCategoryWithTasksSchema

router = Router()

@router.get("/categories-tasks", response=List[RoadmapCategoryWithTasksSchema], auth=None)
def list_roadmap_categories_with_tasks(request):
    categories = RoadmapCategory.objects.all()  
    result = []

    for category in categories:
        tasks = RoadmapTask.objects.filter(category=category)
        tasks_data = [RoadmapTaskSchema.from_orm(task) for task in tasks] 
        
        result.append({
            'id': category.id,
            'title': category.title,
            'tasks': tasks_data
        })

    return result
