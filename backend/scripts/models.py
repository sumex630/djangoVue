#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/5/25 22:58
# @Author  : sunny
# @File    : models.py
# @Software: PyCharm

#
# from django.db import models
#
#
# class BaseModel(models.Model):
#     """抽象模型基类"""
#     create_time = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
#     update_time = models.DateTimeField(auto_now=True, verbose_name='更新时间')
#
#     class Meta:
#         # 指定此模型类是一个抽象模型类，在进行迁移时不生成表
#         abstract = True
