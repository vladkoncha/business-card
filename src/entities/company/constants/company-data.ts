import { CompanyData } from '../model/company-data';

export const COMPANY_DATA: CompanyData = {
  logoSrc: 'src/assets/logo.svg',
  name: 'Название компании',
  description: 'Описание компании',
  phoneNumber: '+7 (000) 000-00-00',
  email: 'example@example.com',
  website: 'https://example.com',
  address: {
    label: 'Адрес',
    link: 'https://yandex.ru/maps/213/moscow/?ll=37.631836%2C55.765692&mode=poi&poi%5Bpoint%5D=37.618875%2C55.751428&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1023322799&z=11.78',
  },
  foundingDate: new Date('01.01.2003'),
  clients: [
    'Клиенты',
    'Клиенты',
    'Клиенты',
    'Клиенты',
    'Клиенты',
    'Клиенты',
    'Клиенты',
    'Клиенты',
    'Клиенты',
    'Клиенты',
    'Клиенты',
    'Клиенты',
  ],
  fax: '8-812-1234567',
};
