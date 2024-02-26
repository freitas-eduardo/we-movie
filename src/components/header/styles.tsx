import styled, { css } from "styled-components";
import media from "styled-media-query";

export const HeaderStyled = styled.header`
  display: flex;
  width: 100%;

  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  ${({ theme }) => css`
   
    max-width: ${theme.grid.container};
    padding: 0 ${theme.spacings.xsmall};
    .logo {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      line-height: 27.24px;
      color: ${theme.colors.white};
      text-decoration: none;
    }
  `};
`;

export const Aside = styled.aside`
  ${({ theme }) => css`
    .cart {
      display: flex;
      align-items: center;
      color: ${theme.colors.white};
      text-decoration:none;
      &-title {
        display: none;
        ${media.greaterThan("medium")`
        display: block;
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.semiBold};
        `};
      }
      &-info {
        display: flex;
        margin-right: ${theme.spacings.xxsmall};
        ${media.greaterThan("medium")`
            flex-direction: column;
            align-items: flex-end;
        `};
      }
      &-value {
        color: ${theme.colors.grey};
        font-size: ${theme.font.sizes.xsmall};
        font-weight: ${theme.font.semiBold};
        line-height: 16.34px;
      }
    }
  `};
`;
