import { ReactNode } from 'react';

export interface IconWrapperProps {
  iconSrc: string;
  size?: 's' | 'm';
  children: ReactNode;
}
