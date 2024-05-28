import styles from './styles.module.less';

const LINKS = [
  {
    href: 'https://telegram.org/',
    imgSrc: 'src/assets/icons/footer/telegram.svg',
  },
  {
    href: 'https://www.whatsapp.com/',
    imgSrc: 'src/assets/icons/footer/whatsapp.svg',
  },
  {
    href: 'https://www.viber.com/',
    imgSrc: 'src/assets/icons/footer/viber.svg',
  },
  {
    href: 'https://www.instagram.com/',
    imgSrc: 'src/assets/icons/footer/instagram.svg',
  },
  {
    href: 'https://vk.com/',
    imgSrc: 'src/assets/icons/footer/vk.svg',
  },
  {
    href: 'https://www.facebook.com/',
    imgSrc: 'src/assets/icons/footer/facebook.svg',
  },
  {
    href: 'https://www.youtube.com/',
    imgSrc: 'src/assets/icons/footer/youtube.svg',
  },
  {
    href: 'https://ok.ru/',
    imgSrc: 'src/assets/icons/footer/ok.svg',
  },
  {
    href: 'https://dzen.ru/',
    imgSrc: 'src/assets/icons/footer/dzen.svg',
  },
  {
    href: 'https://www.tiktok.com/',
    imgSrc: 'src/assets/icons/footer/tiktok.svg',
  },
  {
    href: 'https://www.linkedin.com/',
    imgSrc: 'src/assets/icons/footer/linked-in.svg',
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {LINKS.map((link) => (
        <a key={link.href} className={styles.link} href={link.href}>
          <img className={styles.icon} src={link.imgSrc} />
        </a>
      ))}
    </footer>
  );
};
