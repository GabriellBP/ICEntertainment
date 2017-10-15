from django.contrib import admin
from .models import *

admin.site.register(User)
admin.site.register(Post)
admin.site.register(Image)
admin.site.register(Comment)
admin.site.register(File)
admin.site.register(Category)