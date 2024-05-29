import { SocialLinks } from '@/entities/footer/model/social-links';

export interface CompanyData {
  logoSrc: string;
  name: string;
  description: string;
  phoneNumber: string;
  email: string;
  website: string;
  address: {
    label: string;
    link: string;
  };
  foundingDate: Date;
  clients: string[];
  fax: string;
  socialLinks: SocialLinks;
}
