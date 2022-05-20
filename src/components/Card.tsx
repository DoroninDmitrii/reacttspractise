import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';

export enum CardVariant {
  outline = 'outline',
  primary = 'primary'
}

interface CardProps {
  width: string,
  height: string,
  variant: CardVariant,
  children: React.ReactChild | React.ReactNode,
  onClick: () => void
}

const Card = ({width, height, children, variant, onClick} : CardProps) => {
  
  return (
    <div style={{width, height, background: variant === CardVariant.outline ? 'blue' : 'grey', border: variant === CardVariant.primary ? '10px solid green' : 'none'}} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
