import React from 'react';

export enum CardVariant {
  outlined='outlined',
  primary='primary'
}

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactChild | React.ReactNode;
  variant: CardVariant;
  onClick: () => void
}

const Card = ({width, height, children, variant, onClick}: CardProps) => {
  
  return (
    <div style={{width, height, border: variant === CardVariant.outlined ? '5px solid blue' : 'none', 
    background: variant === CardVariant.primary ? 'green' : ''
    }} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
