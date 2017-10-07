from django.conf.urls import url
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^$', views.PostList.as_view(), name='post_list'),
    url(r'^(?P<pk>[0-9]+)/$', views.PostDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)

