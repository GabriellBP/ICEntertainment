from django.db import models
from django.utils import timezone

class User(models.Model):
    nickname = models.CharField(max_length=30)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    number_posts = models.IntegerField(default=0)

    def __str__(self):
        return self.nickname

class Post(models.Model):
    author = models.ForeignKey('User')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    image_post = models.ImageField(upload_to='uploads/imageUsers/', blank=True, null=True)
    created_date = models.DateTimeField(
        default=timezone.now)
    published_date = models.DateTimeField(
        blank=True, null=True)

    def __str__(self):
        return self.title

class Image(models.Model):
    post = models.ForeignKey('Post')
    image = models.ImageField(upload_to='uploads/imageUsers/')

    def __str__(self):
        return str(self.id)

class Comment(models.Model):
    post = models.ForeignKey('Post')
    author = models.ForeignKey('User')
    comment = models.TextField()

    def __str__(self):
        return str(self.id)

class File(models.Model):
    post = models.ForeignKey('Post')
    title = models.CharField(max_length=200)
    description = models.TextField()
    file = models.CharField(max_length=300)

    def __str__(self):
        return self.title