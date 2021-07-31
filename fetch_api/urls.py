from django.conf.urls import url
from django.urls import path
from .views import GetNodesCount, GetNodeData, FetchComparisons, FetchNames, FetchKeyStories, index, results, graph

app_name = 'fetch_api'
urlpatterns = [
    path('', index, name='index'),
    path('results', results, name='results'),
    path('graph', graph, name='graph'),
    url(r'^fetch/count[/]?$', GetNodesCount.as_view(), name='get_nodes_count'),
    url(r'^fetch/nodes[/]?$', GetNodeData.as_view(), name='get_node_data'),
    url(r'^fetch/compare[/]?$', FetchComparisons.as_view(), name='fetch_comparisons'),
    url(r'^fetch/name[/]?$', FetchNames.as_view(), name='fetch_names'),
    url(r'^fetch/keystories[/]?$', FetchKeyStories.as_view(), name='fetch_key_stories'),
]
