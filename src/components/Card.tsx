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
  onClick: (num: number) => void
}

const Card = ({width, height, variant, children, onClick} : CardProps) => {

  const [state, setState] = useState(100);
  
  return (
    <div style={{width, height, background: variant === CardVariant.outline ? 'blue' : 'grey', border: variant === CardVariant.primary ? '10px solid green' : 'none'}} onClick={() => onClick(state)}>
      {children}
    </div>
  );
};

export default Card;
