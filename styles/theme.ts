import {
    css,
    DefaultTheme,
    FlattenInterpolation,
    FlattenSimpleInterpolation,
    ThemeProps,
  } from 'styled-components'
  
  export const commonColors = {
    black: '#191622',
    lightBlack: '#4D4D4D',
    white: '#E6E6E6',
    purple: {
      500: '#483C67',
      800: '#8D79BA',
      900: '#BD93F9',
    },
    blue: {
      500: '#45638E',
      700: '#2B4D80',
      900: '#163F7C',
    },
  }
  
  const responsive = {
    desktop: (
      style:
        | FlattenInterpolation<ThemeProps<DefaultTheme>>
        | FlattenSimpleInterpolation
        | string
    ) => css`
      @media (min-width: ${({ theme }) => theme.screens.desktop}) {
        ${style}
      }
    `,
    laptop: (
      style:
        | FlattenInterpolation<ThemeProps<DefaultTheme>>
        | FlattenSimpleInterpolation
        | string
    ) => css`
      @media (min-width: ${({ theme }) => theme.screens.laptop}) {
        ${style}
      }
    `,
    tablet: (
      style:
        | FlattenInterpolation<ThemeProps<DefaultTheme>>
        | FlattenSimpleInterpolation
        | string
    ) => css`
      @media (min-width: ${({ theme }) => theme.screens.tablet}) {
        ${style}
      }
    `,
    mobile: (
      style:
        | FlattenInterpolation<ThemeProps<DefaultTheme>>
        | FlattenSimpleInterpolation
        | string
    ) => css`
      @media (min-width: ${({ theme }) => theme.screens.mobile}) {
        ${style}
      }
    `,
  }
  
  const commonFont = {
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontSize: '1rem',
    textTransform: 'uppercase',
  }
  
  const commonTheme = {
    screens: {
      desktop: '1366px',
      laptop: '1024px',
      tablet: '768px',
      mobile: '600px',
      mobile1: '412px',
    },
    responsive,
  }
  
  export const light = {
    ...commonTheme,
    fonts: { ...commonFont },
    colors: {
      ...commonColors,
    },
  }
  
  export type ThemeType = typeof light
  
  export const dark: ThemeType = {
    ...commonTheme,
    fonts: { ...commonFont },
    colors: {
      ...commonColors,
    },
  }
  
  const theme = light
  
  export default theme