import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { CartIcon } from '../icons/cart'

export default function Header() {
  return (
    <S.HeaderStyled>
      <Link className='logo' to='/' >
        <span className='logo'>WeMovie</span>
      </Link>
      <S.Aside>
        <Link to="/cart" className='cart'>
          <div className='cart-info'>
            <strong className='cart-title'>Meu Carrinho</strong>
            <span className='cart-value'>1 item</span>
          </div>
          <CartIcon width='32' height='32' />
        </Link>
      </S.Aside>
    </S.HeaderStyled>
  )
}
