import React from 'react'
import * as S from './styles'

export type CardProps = {
  children: React.ReactNode,
}


export type CardImageProps = {
  src: string
  alt: string
}




export function Card({ children, ...rest }: CardProps) {
  return (
    <S.CardStyled {...rest}>
      {children}
    </S.CardStyled>
  )
}


export function CardContent({ children }: CardProps) {
  return (
    <S.CardContent > {children}</S.CardContent >
  )
}
