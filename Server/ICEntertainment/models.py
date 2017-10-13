from django.db import models
from django.utils import timezone


class User(models.Model):
    nickname = models.CharField(max_length=30)
    name = models.CharField(max_length=100)
    image_user = models.ImageField(upload_to='uploads/imageUsers/', blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    number_posts = models.IntegerField(default=0)
    number_views = models.IntegerField(default=0)

    def __str__(self):
        return self.nickname


class Post(models.Model):
    author = models.ForeignKey('User')
    category = models.ForeignKey('Category')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    image_post = models.ImageField(upload_to='uploads/imagePosts/', blank=True, null=True)
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    number_views = models.IntegerField(default=0)
    #category

    def __str__(self):
        return self.title


class Image(models.Model):
    id_post = models.ForeignKey('Post')
    image = models.ImageField(upload_to='uploads/images/')

    def __str__(self):
        return str(self.id)


class Comment(models.Model):
    id_post = models.ForeignKey('Post')
    id_author = models.ForeignKey('User')
    comment = models.TextField()
    published_date = models.DateTimeField(default=timezone.now)
    edit_date = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return str(self.id)


class File(models.Model):
    id_post = models.ForeignKey('Post')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    file = models.CharField(max_length=300)

    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name