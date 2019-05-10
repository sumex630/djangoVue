#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/4/6 12:17
# @Author  : sunny
# @File    : urls.py.py
# @Software: PyCharm
from django.urls import path

from testapp import views

urlpatterns = [
    path(r'plus', views.plus_test.as_view())
]
