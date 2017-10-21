from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    url(r'^api/post$', views.PostList.as_view({'get': 'list'})),
    url(r'^api/post/(?P<pk>[0-9]+)$', views.PostList.as_view({'get': 'retrieve'})),

    url(r'^api/approvePost$', views.ApprovePostList.as_view()),
    url(r'^api/approvePost/(?P<pk>[0-9]+)$', views.ApprovePostDetail.as_view()),

    url(r'^api/rankingPost', views.RankingPostDetail.as_view()),

    url(r'^post/(?P<id_post>[0-9]+)/image$', views.ImageList.as_view()),
    url(r'^post/(?P<id_post>[0-9]+)/image/(?P<pk>[0-9]+)$', views.ImageDetail.as_view()),

    url(r'^post/(?P<id_post>[0-9]+)/comment$', views.CommentList.as_view()),
    url(r'^post/(?P<id_post>[0-9]+)/comment/(?P<pk>[0-9]+)$', views.CommentDetail.as_view()),

    url(r'^post/(?P<id_post>[0-9]+)/file$', views.CommentList.as_view()),
    url(r'^post/(?P<id_post>[0-9]+)/file/(?P<pk>[0-9]+)$', views.FileDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)

