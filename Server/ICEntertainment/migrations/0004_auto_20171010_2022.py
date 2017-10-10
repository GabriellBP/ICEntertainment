# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-10-10 23:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ICEntertainment', '0003_auto_20171008_1851'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='number_views',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='user',
            name='image_user',
            field=models.ImageField(blank=True, null=True, upload_to='uploads/imageUsers/'),
        ),
        migrations.AddField(
            model_name='user',
            name='number_views',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(upload_to='uploads/images/'),
        ),
        migrations.AlterField(
            model_name='post',
            name='image_post',
            field=models.ImageField(blank=True, null=True, upload_to='uploads/imagePosts/'),
        ),
    ]
