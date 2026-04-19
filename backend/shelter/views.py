from rest_framework.response import Response
from rest_framework.views import APIView

from .data import HOME_DATA
from .serializers import AnimalSerializer, HomePageSerializer


class HomePageView(APIView):
    def get(self, request):
        serializer = HomePageSerializer(HOME_DATA)
        return Response(serializer.data)


class AnimalListView(APIView):
    def get(self, request):
        serializer = AnimalSerializer(HOME_DATA['animals'], many=True)
        return Response(serializer.data)
