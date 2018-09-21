from django.shortcuts import render


# Create your views here.
from sonal_maam_site.models import Reading


def index(request):
    readings = Reading.objects.all()
    return render(request, 'index.html',{'readings':readings})
