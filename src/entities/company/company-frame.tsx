import { useState } from 'react';

import { IconWrapper } from '@/shared/ui/icon-wrapper';
import { Loader } from '@/shared/ui/loader';

import { Footer } from '../footer';
import styles from './styles.module.less';
import { CompanyFrameProps } from './types';

export const CompanyFrame = ({ companyData }: CompanyFrameProps) => {
  const [isLogoLoading, setIsLogoLoading] = useState(true);

  return (
    <section className={styles['company-frame-wrapper']}>
      <hr className={styles.hr} />

      <div className={styles['company-data-grid']}>
        <div className={styles['left-column-wrapper']}>
          <div className={styles['logo-wrapper']}>
            {isLogoLoading && <Loader />}

            <img
              className={styles.image}
              src={companyData?.logoSrc}
              alt=""
              onLoad={() => setIsLogoLoading(false)}
              style={{ visibility: isLogoLoading ? 'hidden' : 'visible' }}
            />
          </div>
          {companyData ? (
            <div>
              <h2 className={styles.name}>{companyData.name}</h2>
              <p className={styles.description}>{companyData.description}</p>
            </div>
          ) : (
            <div className={styles['loader-wrapper']}>
              <Loader />
            </div>
          )}
        </div>

        {companyData ? (
          <div className={styles['company-text-data']}>
            <div className={styles['company-info-wrapper']}>
              <IconWrapper iconSrc="src/assets/icons/phone.svg">
                <a href={`tel:${companyData.phoneNumber}`}>
                  {companyData.phoneNumber}
                </a>
              </IconWrapper>
              <IconWrapper iconSrc="src/assets/icons/email.svg">
                <a href={`mailto:${companyData.email}`}>{companyData.email}</a>
              </IconWrapper>
              <IconWrapper iconSrc="src/assets/icons/link.svg">
                <a href={companyData.website}>{companyData.website}</a>
              </IconWrapper>
              <IconWrapper iconSrc="src/assets/icons/location.svg">
                <a href={companyData.address.link}>
                  {companyData.address.label}
                </a>
              </IconWrapper>
              <IconWrapper iconSrc="src/assets/icons/calendar.svg">
                <p>{companyData.foundingDate.toLocaleDateString('ru-RU')}</p>
              </IconWrapper>
              <IconWrapper iconSrc="src/assets/icons/user.svg">
                <p>{companyData.clients.join(' ')}</p>
              </IconWrapper>
              <IconWrapper iconSrc="src/assets/icons/fax.svg">
                <a href={`tel:${companyData.fax}`}>{companyData.fax}</a>
              </IconWrapper>
            </div>
          </div>
        ) : (
          <div className={styles['loader-wrapper']}>
            <Loader />
          </div>
        )}
      </div>
      <div>
        <hr className={styles['footer-hr']} />
        <Footer socialLinks={companyData?.socialLinks} />
      </div>
    </section>
  );
};
