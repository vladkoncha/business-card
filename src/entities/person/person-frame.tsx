import { useState } from 'react';

import { AddToContactsButton } from '@/features/person';
import { Loader } from '@/shared/ui/loader';

import styles from './styles.module.less';
import { PersonFrameProps } from './types';
import { PersonImage } from './ui/person-image';

export const PersonFrame = ({ personData, logoSrc }: PersonFrameProps) => {
  const [isLogoLoading, setIsLogoLoading] = useState(true);

  return (
    <div className={styles['person-frame-wrapper']}>
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
            {
              <h2 className={styles.name}>
                {personData.surname}
                <br />
                {personData.name}
              </h2>
            }
            {<p className={styles['job-title']}>{personData.jobTitle}</p>}
            <div className={styles['person-info-wrapper']}>
              {
                <a
                  className={styles.mobile}
                  href={`tel:${personData.mobileNumber}`}
                >
                  {personData.mobileNumber}
                </a>
              }
              {personData.phoneNumbers.map((number) => (
                <a className={styles.phone} key={number} href={`tel:${number}`}>
                  {number}
                </a>
              ))}
              {
                <a className={styles.email} href={`mailto:${personData.email}`}>
                  {personData.email}
                </a>
              }
              {
                <a className={styles.website} href={personData.website}>
                  {personData.website}
                </a>
              }
              {
                <a className={styles.address} href={personData.address.link}>
                  {personData.address.label}
                </a>
              }
              {
                <p className={styles.date}>
                  {personData.birthdate.toLocaleDateString('ru-RU')}
                </p>
              }
              {<p className={styles.degree}>{personData.degree}</p>}
            </div>
          </div>
        ) : (
          <div className={styles['loader-wrapper']}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};
