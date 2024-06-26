'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { CompanyFrame, useCompanyData } from '@/entities/company';
import { PersonFrame, usePersonData } from '@/entities/person';
import { useIsMobile } from '@/shared/hooks/use-is-mobile';

import styles from './styles.module.less';
import { Frame } from './types';

export const BusinessCard = () => {
  const personData = usePersonData();
  const companyData = useCompanyData();
  const isMobile = useIsMobile();
  const [currentFrame, setCurrentFrame] = useState<Frame>('person');

  return (
    <div className={styles['card-wrapper']}>
      {!isMobile && (
        <div className={styles['buttons-wrapper']}>
          <button
            className={clsx(
              styles['switch-frame-button'],
              styles['about-employee-button']
            )}
            disabled={currentFrame === 'person'}
            onClick={() => setCurrentFrame('person')}
          >
            о сотруднике
          </button>
          <button
            className={clsx(
              styles['switch-frame-button'],
              styles['about-company-button']
            )}
            disabled={currentFrame === 'company'}
            onClick={() => setCurrentFrame('company')}
          >
            о компании
          </button>
        </div>
      )}
      {isMobile ? (
        <>
          <PersonFrame personData={personData} logoSrc={companyData?.logoSrc} />
          <CompanyFrame companyData={companyData} />
        </>
      ) : (
        <>
          {currentFrame === 'person' && (
            <PersonFrame
              personData={personData}
              logoSrc={companyData?.logoSrc}
            />
          )}
          {currentFrame === 'company' && (
            <CompanyFrame companyData={companyData} />
          )}
        </>
      )}
    </div>
  );
};
