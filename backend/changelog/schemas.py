from ninja import Schema
from datetime import datetime

class ChangelogSchema(Schema):
    title: str
    description: str
    created_on : datetime