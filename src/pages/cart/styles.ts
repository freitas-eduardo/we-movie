import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.section`
  width: 100%;
  margin: 28px auto;

  ${({ theme }) => css`
    color: ${theme.colors.mainBg};
    gap: ${theme.spacings.medium};
    .cart-card__title {
      text-align: center;
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      line-height: 27.24px;
    }

    .cart-card__wrapper {
      display: flex;
      gap: ${theme.spacings.medium};
      flex-direction: column;
      align-items: center;
    }
    .cart-card__button {
      max-width: 180px;
    }
  `}
`;
