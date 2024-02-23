import React from 'react'
import * as S from './styles'
import Header from '../../components/header'


export type BaseTemplateProps = {
  children: React.ReactNode
}

export default function Base({ children }: BaseTemplateProps) {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        {children}
      </S.Container>
    </S.Wrapper>
  )
}
