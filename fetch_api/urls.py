from django.conf.urls import url
from .views import GetNodesCount, GetNodeData, FetchComparisons, FetchNames, FetchKeyStories

urlpatterns = [
    url(r'^count[/]?$', GetNodesCount.as_view(), name='get_nodes_count'),
    url(r'^nodes[/]?$', GetNodeData.as_view(), name='get_node_data'),
    url(r'^compare[/]?$', FetchComparisons.as_view(), name='fetch_comparisons'),
    url(r'^name[/]?$', FetchNames.as_view(), name='fetch_names'),
    url(r'^keystories[/]?$', FetchKeyStories.as_view(), name='fetch_key_stories'),
]