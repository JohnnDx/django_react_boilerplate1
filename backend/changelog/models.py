from django.db import models
from thedevstarter_backend.models import BaseModel

# Create your models here.
class Changelog(BaseModel):
    title = models.CharField(max_length=100,null=False,blank=False)
    description = models.TextField()

    def __str__(self):
        return self.title