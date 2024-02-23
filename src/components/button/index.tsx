import React, { ButtonHTMLAttributes, Children } from 'react'
import * as S from './styles'
export type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: React.ReactNode;
  size: 'medium' | 'large';
  variant: 'primary' | 'secondary'
  icon?: boolean;
  disabled?: boolean;
  onClick?: () => void
  fullwidth: boolean;
  label: string;
} & ButtonTypes;


export default function Button({ children, onClick = () => { }, variant, icon, fullwidth = false, ...rest }: ButtonProps) {
  return (
    <S.ButtonStyled {...rest} onClick={onClick} fullwidth={fullwidth} variant={variant} >
      {!!icon && <span className='icon' >{icon}</span>}
      <span className='label'>{children}</span>
    </S.ButtonStyled >
  )
}
