import styled, { css } from "styled-components";
import media from "styled-media-query";

export const CardStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 343px;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => css`
    padding: calc(${theme.spacings.xxsmall} + 0.3rem)
      calc(${theme.spacings.xxsmall} + 0.2rem);
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};


  `};
`;

export const CardImage = styled.img`
  max-width: 147px;
  height: auto;
  object-fit: cover;
`;
export const CardTitle = styled.strong`
  ${({ theme }) => css`
    background: ${theme.font.sizes.xsmall};
    color: ${theme.colors.greyDark};
    font-weight: ${theme.font.bold};
    margin-top: 7px;
  `};
`;

export const CardPrice = styled.span`
  ${({ theme }) => css`
    background: ${theme.font.sizes.xsmall};
    color: ${theme.colors.greyDark};
    font-weight: ${theme.font.bold};
    margin: 2px 0 8px;
  `};
`;
export const CardFooter = styled.span`
  width:100%
`;
