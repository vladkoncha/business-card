import { useState } from 'react';

import { AddToContactsButton } from '@/features/person';
import { IconWrapper } from '@/shared/ui/icon-wrapper';
import { Loader } from '@/shared/ui/loader';

import { Footer } from '../footer';
import styles from './styles.module.less';
import { PersonFrameProps } from './types';
import { PersonImage } from './ui/person-image';

export const PersonFrame = ({ personData, logoSrc }: PersonFrameProps) => {
  const [isLogoLoading, setIsLogoLoading] = useState(true);

  return (
    <section className={styles['person-frame-wrapper']}>
      <div className={styles['person-data-grid']}>
        <div>
          <PersonImage src="src/assets/person.jpg" />
          <AddToContactsButton
            name={personData ? `${personData.surname} ${personData.name}` : ''}
            phone={personData?.mobileNumber}
            email={personData?.email}
            isDisabled={!personData}
          />
        </div>
        <div className={styles['person-data-wrapper']}>
          <div className={styles['logo-wrapper']}>
            {isLogoLoading && <Loader />}

            <img
              className={styles.image}
              src={logoSrc}
              alt=""
              onLoad={() => setIsLogoLoading(false)}
              style={{ visibility: isLogoLoading ? 'hidden' : 'visible' }}
            />
          </div>
          <hr className={styles.hr} />

          {personData ? (
            <div className={styles['person-text-data']}>
              <h2 className={styles.name}>
                {personData.surname}
                <br />
                {personData.name}
              </h2>

              <p className={styles['job-title']}>{personData.jobTitle}</p>
              <div className={styles['person-info-wrapper']}>
                <IconWrapper iconSrc="src/assets/icons/mobile.svg">
                  <a href={`tel:${personData.mobileNumber}`}>
                    {personData.mobileNumber}
                  </a>
                </IconWrapper>
                {personData.phoneNumbers.map((number) => (
                  <IconWrapper
                    key={number}
                    iconSrc="src/assets/icons/phone.svg"
                  >
                    <a href={`tel:${number}`}>{number}</a>
                  </IconWrapper>
                ))}
                <IconWrapper iconSrc="src/assets/icons/email.svg">
                  <a href={`mailto:${personData.email}`}>{personData.email}</a>
                </IconWrapper>
                <IconWrapper iconSrc="src/assets/icons/link.svg">
                  <a href={personData.website}>{personData.website}</a>
                </IconWrapper>
                <IconWrapper iconSrc="src/assets/icons/location.svg">
                  <a href={personData.address.link}>
                    {personData.address.label}
                  </a>
                </IconWrapper>
                <IconWrapper iconSrc="src/assets/icons/calendar.svg">
                  <p>{personData.birthdate.toLocaleDateString('ru-RU')}</p>
                </IconWrapper>
                <IconWrapper iconSrc="src/assets/icons/user.svg">
                  <p>{personData.degree}</p>
                </IconWrapper>
              </div>
            </div>
          ) : (
            <div className={styles['loader-wrapper']}>
              <Loader />
            </div>
          )}
        </div>
      </div>
      <div>
        <hr className={styles['footer-hr']} />
        <Footer socialLinks={personData?.socialLinks} />
      </div>
    </section>
  );
};
