export interface HeroSection {
  eyebrow: string;
  title: string;
  description: string;
  primary_button_text: string;
  primary_button_link: string;
  secondary_button_text: string;
  secondary_button_link: string;
  image_url: string;
}

export interface InfoCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Animal {
  id: number;
  name: string;
  kind: string;
  age: string;
  story: string;
  image_url: string;
  tag: string;
}

export interface StoryCard {
  id: number;
  title: string;
  description: string;
}

export interface AboutSection {
  title: string;
  description: string;
}

export interface StatCard {
  id: number;
  icon: string;
  label: string;
  value: string;
}

export interface ContactSection {
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
}

export interface FinalCta {
  title: string;
  description: string;
}

export interface HomepageData {
  hero: HeroSection;
  reasons: InfoCard[];
  solutions: InfoCard[];
  animals: Animal[];
  stories: StoryCard[];
  about: AboutSection;
  stats: StatCard[];
  contact: ContactSection;
  final_cta: FinalCta;
}
