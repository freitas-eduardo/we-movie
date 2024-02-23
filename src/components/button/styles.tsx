import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

export type buttonModifiersProps = Pick<
  ButtonProps,
  "variant" | "size" | "children" | "icon" | "fullwidth"
>;

const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.green};
    color: ${theme.colors.white};
  `,

  fullwidth: () => css`
    width: 100%;
  `,
};

export const ButtonStyled = styled.button<buttonModifiersProps>`
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  

  ${({ theme, variant, fullwidth }) => css`
  border-radius:${theme.border.radius};
    ${!!variant && buttonModifiers[variant](theme)};
    ${!!fullwidth && buttonModifiers.fullwidth()};

  `}
`;
