from django.urls import path

from .views import AnimalListView, HomePageView

urlpatterns = [
    path('home/', HomePageView.as_view(), name='home-data'),
    path('animals/', AnimalListView.as_view(), name='animal-list'),
]
