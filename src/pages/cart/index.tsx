import React from "react";
import Card from "../../components/card";
import * as S from "./styles";
import { Button } from "../../components/button";

export default function CartPage() {
  return (
    <S.Container>
      <Card>
        <Card.CardContent>
          <div className="cart-card__wrapper">
            <h1 className="cart-card__title">
              Parece que não há nada por aqui :(
            </h1>
            <img src="/images/empty.png" alt="" loading="lazy" />
            <Button className="cart-card__button" variant="primary" size="large">
              {" "}Voltar{" "}
            </Button>
          </div>
        </Card.CardContent>
      </Card>
    </S.Container>
  );
}
