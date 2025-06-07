export interface MenuItem {
  title: string;
  href: string;
  subItems?: MenuItem[];
}

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export interface Education {
  school: string;
  years: string;
  degree: string;
  gpa: string;
}

export interface ProgrammingProject {
  title: string;
  websiteUrl: string;
  imageUrl: string;
  languages: string[];
  description: string;
  additionalNotes?: string;
  buttonText?: string;
}

export interface BiologyProject {
  title: string;
  subtitle: string;
  keyTools: string[];
  description: string;
  imageUrl?: string;
}

export interface BlogPost {
  title: string;
  subtitle: string;
  content: string[];
  imageUrl: string;
  imagePosition: 'left' | 'right';
} 