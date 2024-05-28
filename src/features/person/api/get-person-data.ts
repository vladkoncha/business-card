import { PERSON_DATA } from '@/entities/person/constants/person-data';
import { PersonData } from '@/entities/person/model/person-data';

export const getPersonData = async () => {
  return new Promise<PersonData>((resolve) => {
    setTimeout(() => {
      resolve(PERSON_DATA);
    }, 1_200);
  });
};
