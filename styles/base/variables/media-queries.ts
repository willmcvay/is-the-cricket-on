import * as mediaWidths from './media-widths'

const mediaQueries = {
  aboveMobile: `@media only screen and (min-width: ${mediaWidths.mobile})`,
  aboveTablet: `@media only screen and (min-width: ${mediaWidths.tablet})`,
  aboveDesktop: `@media only screen and (min-width: ${mediaWidths.desktop})`,
  noGridSupport: `@supports not (display: grid)`
}

export default mediaQueries
