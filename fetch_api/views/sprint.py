from django.shortcuts import render, redirect

from fetch_api.forms import SprintForm
from fetch_api.models import Story


def index(request):
    context = {'form': SprintForm()}
    return render(request, 'sprint/index.html', context=context)


def results(request):
    if request.method == "POST":
        form = SprintForm(request.POST)
        if form.is_valid():
            stories = Story.nodes.all()[0:form.cleaned_data['num_stories']]
            return render(request, 'sprint/results.html', context={'stories': stories})
        else:
            return render(request, 'sprint/index.html', context={'form': form})
    else:
        return redirect(to='fetch_api:index')


def graph(request):
    return redirect(to='fetch_api:index')
