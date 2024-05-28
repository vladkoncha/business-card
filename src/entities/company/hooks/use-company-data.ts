import { useEffect, useState } from 'react';

import { getCompanyData } from '@/features/company';

import { CompanyData } from '../model/company-data';

export const useCompanyData = () => {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);

  useEffect(() => {
    async function fetchData() {
      setCompanyData(await getCompanyData());
    }
    void fetchData();
  }, []);

  return companyData;
};
