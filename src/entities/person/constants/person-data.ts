import { PersonData } from '../model/person-data';

export const PERSON_DATA: PersonData = {
  name: 'Иван Петрович',
  surname: 'Иванов',
  jobTitle: 'Директор',
  mobileNumber: '+7 (000) 000-00-00',
  phoneNumbers: ['+7 (000) 000-00-01', '+7 (000) 000-00-02'],
  email: 'example@example.com',
  website: 'https://example.com',
  address: {
    label: 'Москва',
    link: 'https://yandex.ru/maps/213/moscow/?ll=37.631836%2C55.765692&mode=poi&poi%5Bpoint%5D=37.618875%2C55.751428&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1023322799&z=11.78',
  },
  birthdate: new Date('01/01/1982'),
  degree: 'Звание, учёная степень',
  socialLinks: {
    telegram: 'https://telegram.org/',
    whatsapp: 'https://www.whatsapp.com/',
    viber: 'https://www.viber.com/',
    instagram: 'https://www.instagram.com/',
    vk: 'https://vk.com/',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
    ok: 'https://ok.ru/',
    dzen: 'https://dzen.ru/',
    tiktok: 'https://www.tiktok.com/',
    linkedIn: 'https://www.linkedin.com/',
  },
};
