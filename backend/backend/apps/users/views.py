from django.shortcuts import render

from rest_framework.views import APIView


class Login(APIView):
    """登录接口"""
    def post(self, request, *args, **kwargs):
        print(request)