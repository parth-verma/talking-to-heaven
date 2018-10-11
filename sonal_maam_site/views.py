import json
import urllib

from django.http import HttpResponseRedirect
from django.shortcuts import render

# Create your views here.
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

from sonal_maam_site.models import Reading


def index(request):
    readings = Reading.objects.all()
    return render(request, 'index.html',{'readings':readings})

@csrf_exempt
def cart(request):
    if request.method == "POST":
        cart_new = request.POST
        request.session['cart'] = cart_new
        print(cart_new)
        return HttpResponseRedirect(reverse('cart'))
    try:
        cart_new = json.loads(urllib.parse.unquote(request.session.get('cart')['cart']))
    except TypeError:
        cart_new = []
    request.session.clear()
    cart_products = {x['id']:x['quantity'] for x in cart_new}
    cart_items = Reading.objects.filter(pk__in=[x for x in cart_products.keys()])
    order_items = []
    for item in cart_items:
        order_items.append({'name':item.name,'price':item.price,'quantity':cart_products[item.id],'id':item.id,'image_url':item.image.url})

    return render(request, 'cart.html',{'cart_items':order_items})
