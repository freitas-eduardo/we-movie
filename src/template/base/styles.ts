import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    height: 100vh;

    color: ${theme.colors.white};
  `}
`;

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 ${theme.spacings.xsmall};
  `}
`;
