import { useEffect, useState } from 'react';

import { getPersonData } from '@/features/person';

import { PersonData } from '../model/person-data';

export const usePersonData = () => {
  const [personData, setPersonData] = useState<PersonData | null>(null);

  useEffect(() => {
    async function fetchData() {
      setPersonData(await getPersonData());
    }
    void fetchData();
  }, []);

  return personData;
};
