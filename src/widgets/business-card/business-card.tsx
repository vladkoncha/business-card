import clsx from 'clsx';
import { useState } from 'react';

import { useCompanyData } from '@/entities/company';
import { PersonFrame, usePersonData } from '@/entities/person';

import styles from './styles.module.less';
import { Frame } from './types';

export const BusinessCard = () => {
  const personData = usePersonData();
  const companyData = useCompanyData();
  const [currentFrame, setCurrentFrame] = useState<Frame>('person');

  return (
    <div className={styles['card-wrapper']}>
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
      <PersonFrame personData={personData} logoSrc={companyData?.logoSrc} />
    </div>
  );
};
