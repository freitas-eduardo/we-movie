import React from 'react'
import * as S from './styles'
import Header from '../../components/header'
import { Outlet } from "react-router-dom";


export default function Base() {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
    </S.Wrapper>
  )
}
