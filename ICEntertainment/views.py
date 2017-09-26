from django.shortcuts import render

def post_list(request):
    return render(request, 'ICEntertainment/post_list.html', {})