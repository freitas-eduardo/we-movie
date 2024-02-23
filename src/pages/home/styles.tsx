import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  display:grid;
  gap: ${({ theme }) => theme.spacings.xsmall};
  grid-template-columns: repeat(1, minmax(0, 1fr));

  gap:${({ theme }) => theme.spacings.xsmall};
  ${media.greaterThan("medium")`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `};
`;


export const WrapperLoading = styled.section`
  width: 100%;
  margin: 0 auto;
`;
