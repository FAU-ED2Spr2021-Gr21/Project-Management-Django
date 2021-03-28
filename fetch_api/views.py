from django.shortcuts import render

from .utils import (
    count_nodes,
    fetch_nodes,
    fetch_node_details,
    fetch_names,
    fetch_comparisons,
)
# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import fetch_nodes

class FetchComparisons(APIView):
    def get(self, request):
        comparison = fetch_comparisons()
        data = {
            'response': {
                'status': '200',
                'rows': len(comparison),
                'data': comparison,
            },
        }
        return Response(data)

class FetchNames(APIView):
    def get(self, request):
        names = fetch_names()
        data = {
            'response': {
                'status': '200',
                'rows': len(names),
                'data': names,
            },
        }
        return Response(data)

class GetNodesCount(APIView):
    def get(self, request):
        fetch_info = {
            'node_type': request.GET.get('t', 'Story'),
            'name': request.GET.get('n', ''),
            'notes': request.GET.get('no', ''),
            'value': request.GET.get('v', ''),
            'text': request.GET.get('txt', ''),
            'type': request.GET.get('ty', ''),
            'limit': 10,
            'page': int(request.GET.get('p', 1)),
        }
        count = count_nodes(fetch_info)
        data = {
            'response': {
                'status': '200',
                'data': count,
            },
        }
        return Response(data)


class GetNodeData(APIView):
    def get(self, request):
        fetch_info = {
            'node_type': request.GET.get('t', 'Story'),
            'name': request.GET.get('n', ''),
            'notes': request.GET.get('no', ''),
            'value': request.GET.get('v', ''),
            'text': request.GET.get('txt', ''),
            'type': request.GET.get('ty', ''),
            'limit': 10,
            'page': int(request.GET.get('p', 1)),
        }
        nodes = fetch_nodes(fetch_info)
        data = {
            'response': {
                'status': '200',
                'rows': len(nodes),
                'data': nodes,
            },
        }
        return Response(data)
