from rest_framework import serializers
from .models import Project

#serializer will turn project instances into JSON
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['title', 'date']