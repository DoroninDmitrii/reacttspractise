import React, {FC} from 'react';


export enum CardVarient {
  outlined='outlined',
  primary='primary',
}

interface CardProps {
  width?: string,
  height?: string,
  children: React.ReactNode,
  variant: CardVarient,
  onClick: () => void
}

// const Card = ({width, height, children} : CardProps) => {
//   return (
//     <div style={{width, height, background: 'gray'}}>
//       {children}
//     </div>
//   );
// };

const Card: FC<CardProps> = ({width, height, children, variant, onClick}) => {
  return (
    <div style={{width, height, background: variant === CardVarient.outlined ? 'blue' : '', border: variant === CardVarient.primary ? '5px solid red' : 'none'}} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
