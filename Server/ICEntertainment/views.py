from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import *
from .serializers import *
import sys


# List all posts (or a number of posts), or create a new one.
# api/post/:begin/:end
class PostList(APIView):
    #if begin and end were not fill, show all posts
    def get(self, request, begin=1, end=sys.maxsize):
        posts = Post.objects.all().order_by('-id')[int(begin):int(end)]
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Retrieve, update or delete a post instance.
# api/post/:pk
class PostDetail(APIView):
    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        post = self.get_object(pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk):
        post = self.get_object(pk)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# List post with publish_date null
# api/approvePost
class ApprovePostList(APIView):
    def get(self, request):
        posts = Post.objects.filter(publish_date=None).order_by('id')
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)


# Update the publish_date of the post
# api/approvePost/:pk
class ApprovePostDetail(APIView):
    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def put(self, request, pk):
        post = self.get_object(pk)
        post.published_date = request.data['published_date']
        serializer = PostSerializer(post)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# List 10 posts with the most views
# api/post/rankingPost
class RankingPostDetail(APIView):
    def get(self, request):
        posts = Post.objects.all().order_by('-number_views')[:10]
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)


# Create a new image, list all images about that post.
# api/post/:id_post/image
class ImageList(APIView):
    def get_object(self, id_post):
        try:
            return Image.objects.filter(id_post=id_post)
        except Image.DoesNotExist:
            raise Http404

    #get all images about that post
    def get(self, request, id_post):
        image = self.get_object(id_post)
        serializer = ImageSerializer(image, many=True)
        return Response(serializer.data)

    def post(self, request, id_post):
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Retrieve or delete images of a post instance.
# api/post/:id_post/image/:pk
class ImageDetail(APIView):
    def get_object(self, id_post, pk):
        try:
            return Image.objects.get(id_post=id_post, pk=pk)
        except Image.DoesNotExist:
            raise Http404

    # retrieve a image of a post instance
    def get(self, request, id_post, pk):
        image = self.get_object(id_post, pk)
        serializer = ImageSerializer(image)
        return Response(serializer.data)

    def delete(self, request, id_post, pk):
        image = self.get_object(id_post, pk)
        image.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Create a new comment, list all comments about that post.
# api/post/:id_post/comment
class CommentList(APIView):
    def get_object(self, id_post):
        try:
            return Comment.objects.filter(id_post=id_post)
        except Comment.DoesNotExist:
            raise Http404

    #get all comments about that post
    def get(self, request, id_post):
        comment = self.get_object(id_post)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data)

    def post(self, request, id_post):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Update, Retrieve or delete comments of a post instance.
# api/post/:id_post/comment/:pk
class CommentDetail(APIView):
    def get_object(self, id_post, pk):
        try:
            return Comment.objects.get(id_post=id_post, pk=pk)
        except Comment.DoesNotExist:
            raise Http404

    # retrieve a comment of a post instance
    def get(self, request, id_post, pk):
        comment = self.get_object(id_post, pk)
        serializer = CommentSerializer(comment)
        return Response(serializer.data)

    def put(self, request, id_post, pk):
        comment = self.get_object(id_post, pk)
        comment.comment = request.data['comment']
        comment.published_date = request.data['published_date']
        serializer = CommentSerializer(comment)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id_post, pk):
        comment = self.get_object(id_post, pk)
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Create a new file in a Post, list all files about that post.
# api/post/:id_post/file
class FileList(APIView):
    def get_object(self, id_post):
        try:
            return File.objects.filter(id_post=id_post).order_by('id')
        except File.DoesNotExist:
            raise Http404

    #get all files about that post
    def get(self, request, id_post):
        file = self.get_object(id_post)
        serializer = FileSerializer(file, many=True)
        return Response(serializer.data)

    def post(self, request, id_post):
        serializer = FileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Update, Retrieve or delete files of a post instance.
# api/post/:id_post/comment/:pk
class FileDetail(APIView):
    def get_object(self, id_post, pk):
        try:
            return File.objects.get(id_post=id_post, pk=pk)
        except File.DoesNotExist:
            raise Http404

    # retrieve a file of a post instance
    def get(self, request, id_post, pk):
        file = self.get_object(id_post, pk)
        serializer = FileSerializer(file)
        return Response(serializer.data)

    def put(self, request, id_post, pk):
        file = self.get_object(id_post, pk)
        serializer = FileSerializer(file, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id_post, pk):
        file = self.get_object(id_post, pk)
        file.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


