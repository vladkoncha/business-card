import { COMPANY_DATA } from '@/entities/company/constants/company-data';
import { CompanyData } from '@/entities/company/model/company-data';

export const getCompanyData = async () => {
  return new Promise<CompanyData>((resolve) => {
    setTimeout(() => {
      resolve(COMPANY_DATA);
    }, 2_000);
  });
};
