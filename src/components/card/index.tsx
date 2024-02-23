import React from 'react'
import * as S from './styles'
import Button from '../button'
import { formatPrice } from '../../utils/format'


type CardProps = {
  imageUrl: string
  title: string
  price: number
  children?: React.ReactNode,
  footer: React.ReactNode
}


export default function Card({ imageUrl, title, price, ...rest }: CardProps) {


  return (
    <S.CardStyled {...rest}>
      <S.CardImage src={imageUrl} alt={title} loading='lazy' />
      <S.CardTitle>
        {title}
      </S.CardTitle>
      <S.CardPrice> {formatPrice(price)}</S.CardPrice>

    </S.CardStyled>
  )
}

