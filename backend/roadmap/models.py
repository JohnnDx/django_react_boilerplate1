from django.db import models
from thedevstarter_backend.models import BaseModel

class RoadmapCategory(BaseModel):
    """
    Model to represent different categories of roadmap tasks.
    """
    title = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.title

class RoadmapTask(BaseModel):
    """
    Model to represent tasks in the roadmap.
    """
    category = models.ForeignKey(RoadmapCategory, related_name='tasks', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return f"{self.title} ({self.category.title})"
