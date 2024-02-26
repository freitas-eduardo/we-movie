import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'
export type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: React.ReactNode;
  size: 'medium' | 'large';
  variant: 'primary' | 'secondary'
  icon?: boolean;
  disabled?: boolean;
  onClick?: () => void
  fullwidth?: boolean;

} & ButtonTypes;


export function Button({ children, onClick = () => { }, variant = 'primary', size = 'medium', fullwidth = false, ...rest }: ButtonProps) {
  return (
    <S.ButtonStyled {...rest} onClick={onClick} size={size} fullwidth={fullwidth} variant={variant} >
      {children}
    </S.ButtonStyled >
  )
}
