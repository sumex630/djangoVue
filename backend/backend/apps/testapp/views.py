from django.http import JsonResponse
from django.shortcuts import render
from requests import Response
from rest_framework.views import APIView


# Create your views here.
class plus_test(APIView):
    """测试前后端交互"""
    def post(self, request, *args, **kwargs):
        print("======", request.POST.get('count', 0))
        count = int(request.POST.get('count', 0))
        count += 1

        return JsonResponse({'msg': 'OK', 'count': count})