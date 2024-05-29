import clsx from 'clsx';

import { SocialLinks } from './model/social-links';
import styles from './styles.module.less';
import { FooterProps } from './types';

const LINKS_ICONS: SocialLinks = {
  telegram: 'telegram.svg',
  whatsapp: 'whatsapp.svg',
  viber: 'viber.svg',
  instagram: 'instagram.svg',
  vk: 'vk.svg',
  facebook: 'facebook.svg',
  youtube: 'youtube.svg',
  ok: 'ok.svg',
  dzen: 'dzen.svg',
  tiktok: 'tiktok.svg',
  linkedIn: 'linked-in.svg',
};

export const Footer = ({ socialLinks }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      {(Object.keys(LINKS_ICONS) as (keyof SocialLinks)[]).map((link) => (
        <a
          key={link}
          className={clsx(styles.link, { [styles.disabled]: !socialLinks })}
          href={socialLinks ? socialLinks[link] : ''}
        >
          <img
            className={styles.icon}
            src={`./assets/icons/footer/${LINKS_ICONS[link]}`}
          />
        </a>
      ))}
    </footer>
  );
};
