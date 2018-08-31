from django.urls import path

from sonal_maam_site.views import index

urlpatterns = [
    path('',index,name='home')
]