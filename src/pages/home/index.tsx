import { useQuery } from "@tanstack/react-query";
import Card from "../../components/card";
import { getProducts } from "../../service/request";
import Base from "../../template/base";
import * as S from "./styles";


export function Home() {
  const { isLoading, data: movies } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });
  console.log(movies)


  if (isLoading) {
    return (

      <S.WrapperLoading>
        carregando
      </S.WrapperLoading>
    );
  }

  return (
    <Base>
      <S.Container>

      </S.Container>
    </Base >
  );
}
