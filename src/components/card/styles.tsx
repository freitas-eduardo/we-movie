import styled, { css } from "styled-components";
import media from "styled-media-query";

export const CardStyled = styled.div`
  width: 100%;
  margin: 0 auto;
 
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => css`
    padding: calc(${theme.spacings.xxsmall} + 0.3rem)
      calc(${theme.spacings.xxsmall} + 0.2rem);
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    .image {
      max-width: 147px;
      height: auto;
      object-fit: cover;
    }
    .title {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.greyDark};
      font-weight: ${theme.font.bold};
      line-height:16.34px ;
      margin-top: 7px;
    }
    .price {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.greyDark};
      font-weight: ${theme.font.bold};
      line-height:16.34px ;
      margin: 8px 0 ;
    }
  `}
`;
