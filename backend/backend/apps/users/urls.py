#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Author  : sunny
from django.urls import path

from users import views

urlpatterns = [
    path(r'login', views.Login.as_view())
]