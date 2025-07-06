from ninja import Schema
from datetime import datetime
from typing import List

class RoadmapTaskSchema(Schema):
    id: int
    title: str
    description: str
    created_on: datetime

class RoadmapCategoryWithTasksSchema(Schema):
    id: int
    title: str
    tasks: List[RoadmapTaskSchema] 
