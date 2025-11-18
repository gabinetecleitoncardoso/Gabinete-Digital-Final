export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  link: string;
}

export interface InstagramPost {
  id: number;
  text: string;
  date: string;
  isNew: boolean;
  link: string;
}

export interface ContactDetails {
  phones: string[];
  email: string;
  address: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    whatsapp: string;
  };
}

export interface BrandingData {
  deputyPhotoUrl: string;
  logoUrl: string;
  mascotUrl: string;
}