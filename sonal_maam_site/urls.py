from django.urls import path

from sonal_maam_site.views import index,cart

urlpatterns = [
    path('',index,name='home'),
    path('cart',cart,name='cart')
]