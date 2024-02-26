import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './component'

export type buttonModifiersProps = Pick<
  ButtonProps,
  'variant' | 'size' | 'children' | 'icon' | 'fullwidth'
>

const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.green};
    color: ${theme.colors.white};
  `,
  medium: (theme: DefaultTheme) => css`
    padding: calc(${theme.spacings.xxsmall} + 0.3rem)
      calc(${theme.spacings.xxsmall} + 0.2rem);
  `,
  large: (theme: DefaultTheme) => css`
    padding: calc(${theme.spacings.xxsmall} + 0.3rem)
      calc(${theme.spacings.large} + 2rem);
  `,

  fullwidth: () => css`
    width: 100%;
  `
}

export const ButtonStyled = styled.button<buttonModifiersProps>`
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  cursor: pointer;
  
  .button-icon {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.4rem;
    margin-right: 1.2rem;
  }

  ${({ theme, variant, size, fullwidth }) => css`
    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius};
    ${!!variant && buttonModifiers[variant](theme)};
    ${!!size && buttonModifiers[size](theme)};
    ${!!fullwidth && buttonModifiers.fullwidth()};
  `}
`
