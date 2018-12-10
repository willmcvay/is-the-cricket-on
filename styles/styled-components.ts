import * as styledComponents from 'styled-components'

export interface ThemeInterface {
  primaryColor?: string
  secondaryColor?: string
  isActive?: boolean
  gridColumns?: string
  invertColor?: boolean
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>

export { css, injectGlobal, keyframes, ThemeProvider }

export default styled
