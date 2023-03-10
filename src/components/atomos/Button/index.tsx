import React from 'react';
import * as S from './styles';

type ButtonProps = {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <S.ButtonWrapper>{children}</S.ButtonWrapper>;
};
