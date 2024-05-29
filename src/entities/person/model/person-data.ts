import { SocialLinks } from '@/entities/footer/model/social-links';

export interface PersonData {
  name: string;
  surname: string;
  jobTitle: string;
  mobileNumber: string;
  phoneNumbers: string[];
  email: string;
  website: string;
  address: {
    label: string;
    link: string;
  };
  birthdate: Date;
  degree: string;
  socialLinks: SocialLinks;
}
