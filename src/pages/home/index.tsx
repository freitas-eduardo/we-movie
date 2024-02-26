import { useQuery } from "@tanstack/react-query";
import Card from "../../components/card";
import { getProducts } from "../../service/request";
import { CartIcon } from '../../components/icons'
import * as S from "./styles";
import { formatPrice } from "../../utils/format";
import { Button } from "../../components/button";
import { ShoppingCartIcon } from "../../components/icons/shooping_cart";
import { HomeSharedActions } from "../../@types/products";


export function HomePage() {
  const { isLoading, data: movies } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });
  console.log(movies)

  const sharedActions: HomeSharedActions = {
    handleAddProducts: (id: number) => {
      console.log(id)
    },

  }


  if (isLoading) {
    return (
      <>
        ...Carregando
      </>

    );
  }

  return (
    <S.Container>
      {movies?.map((item, index) => {
        return (
          <Card key={`card-${index}`} >
            <Card.CardContent>
              <img className="image" src={item.image} />
              <strong className="title" >{item.title} </strong>
              <span className="price" >{formatPrice(item.price)}</span>
              <Button onClick={() => sharedActions.handleAddProducts(item.id)} fullwidth size="medium" variant="primary" icon={false}>
                <>
                  <span className="button-icon">
                    <ShoppingCartIcon width='13' height='13' />
                    <span> 0</span>
                  </span>
                  <span className="button-label" >Adicionar Carrinho </span>
                </>
              </Button>
            </Card.CardContent>
          </Card>
        )
      })}
    </S.Container>
  );
}
