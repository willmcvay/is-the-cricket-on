import * as styledComponents from 'styled-components'

export interface ThemeInterface {
  primaryColor?: string
  secondaryColor?: string
  isActive?: boolean
  gridColumns?: string
  invertColor?: boolean
  size?: 'FULL' | 'HALF' | 'QUARTER'
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>

export { css, createGlobalStyle, keyframes, ThemeProvider }

export default styled
