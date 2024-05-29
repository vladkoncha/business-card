import { Button } from '@/shared/ui/button';

import { CallButtonProps } from './types';

export const CallButton = ({ phone, isDisabled }: CallButtonProps) => {
  const handleClick = () => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <Button onClick={handleClick} disabled={isDisabled} styleType={'secondary'}>
      позвонить
    </Button>
  );
};
