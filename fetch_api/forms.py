from django import forms


class SprintForm(forms.Form):
    duration = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'How long do you have?'
    }))
    num_stories = forms.IntegerField(widget=forms.NumberInput(attrs={
        'class': 'form-control',
        'placeholder': 'How many stories?'
    }))
    actors = forms.CharField(widget=forms.NumberInput(attrs={
        'class': 'form-control',
        'placeholder': 'How many people?'
    }))
