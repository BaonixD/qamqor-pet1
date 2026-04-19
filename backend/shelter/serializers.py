from rest_framework import serializers


class HeroSerializer(serializers.Serializer):
    eyebrow = serializers.CharField()
    title = serializers.CharField()
    description = serializers.CharField()
    primary_button_text = serializers.CharField()
    primary_button_link = serializers.CharField()
    secondary_button_text = serializers.CharField()
    secondary_button_link = serializers.CharField()
    image_url = serializers.URLField()


class InfoCardSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    icon = serializers.CharField()
    title = serializers.CharField()
    description = serializers.CharField()


class AnimalSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    kind = serializers.CharField()
    age = serializers.CharField()
    story = serializers.CharField()
    image_url = serializers.URLField()
    tag = serializers.CharField()


class StorySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField()
    description = serializers.CharField()


class AboutSerializer(serializers.Serializer):
    title = serializers.CharField()
    description = serializers.CharField()


class StatSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    icon = serializers.CharField()
    label = serializers.CharField()
    value = serializers.CharField()


class ContactSerializer(serializers.Serializer):
    title = serializers.CharField()
    description = serializers.CharField()
    email = serializers.EmailField()
    phone = serializers.CharField()
    address = serializers.CharField()


class FinalCtaSerializer(serializers.Serializer):
    title = serializers.CharField()
    description = serializers.CharField()


class HomePageSerializer(serializers.Serializer):
    hero = HeroSerializer()
    reasons = InfoCardSerializer(many=True)
    solutions = InfoCardSerializer(many=True)
    animals = AnimalSerializer(many=True)
    stories = StorySerializer(many=True)
    about = AboutSerializer()
    stats = StatSerializer(many=True)
    contact = ContactSerializer()
    final_cta = FinalCtaSerializer()
