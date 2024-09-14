from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q
from .models import Project
from .serializers import ProjectSerializer

@api_view(['GET', 'POST'])
def project_data(request):
    #for GET requests
    if request.method == 'GET':
        #parse query params from the GET request
        search_query = request.query_params.get('search', '')
        if search_query:
            #if there is a search query, filter the projects to only show projects with a matching title
            projects = Project.objects.filter(Q(title__icontains=search_query))
        else:
            #retrieve all projects from the database
            projects = Project.objects.all()
        #serializer converts data to JSON
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

    #for POST requests
    elif request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            #save project to database
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    