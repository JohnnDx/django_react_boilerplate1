# Generated by Django 5.0.3 on 2024-09-09 11:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roadmap', '0003_roadmapcategory_roadmaptask_delete_task_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='roadmaptask',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='roadmap.roadmapcategory'),
        ),
    ]
