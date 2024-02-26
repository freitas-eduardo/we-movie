import React from 'react'
import Card from '../../components/card'
import * as S from './styles'
import { Button } from '../../components/button'

export default function CartSucessPage() {
  return (
    <S.Container>
      <Card>
        <Card.CardContent>
          <div className="cart-card__wrapper">
            <h1 className="cart-card__title">
              Compra realizada
              com sucesso!
            </h1>
            <img src="/public/images/success.png" alt="" loading="lazy" />
            <Button className="cart-card__button" variant="primary" size="large">
              {" "}Voltar{" "}
            </Button>
          </div>
        </Card.CardContent>
      </Card>
    </S.Container>
  )
}
