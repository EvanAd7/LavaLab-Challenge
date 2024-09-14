from django.db import models

#model for a project
class Project(models.Model):
    title = models.CharField(max_length=200, unique=True)
    date = models.DateField(auto_now_add=True)

    #returns project title when object is converted to a string
    def __str__(self):
        return self.title