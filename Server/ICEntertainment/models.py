from django.db import models
from django.utils import timezone


class Post(models.Model):
    author = models.ForeignKey('User')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='uploads/imageUsers/', blank=True, null=True)
    created_date = models.DateTimeField(
        default=timezone.now)
    published_date = models.DateTimeField(
        blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title


class User(models.Model):
    nickname = models.CharField(max_length=30)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    number_posts = models.IntegerField(default=0)

    def __str__(self):
        return self.nickname


class Files(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    file = models.CharField(max_length=300)
    post = models.ForeignKey('Post')
