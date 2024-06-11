import { Button } from '@/shared/ui/button';
import { IconWrapper } from '@/shared/ui/icon-wrapper';

import { CallButtonProps } from './types';

export const CallButton = ({ phone, isDisabled }: CallButtonProps) => {
  const handleClick = () => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <Button onClick={handleClick} disabled={isDisabled} styleType={'secondary'}>
      <IconWrapper iconSrc="./assets/icons/call.svg" size="m">
        позвонить
      </IconWrapper>
    </Button>
  );
};
