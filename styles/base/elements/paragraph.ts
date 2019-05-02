import styled from '../../styled-components'
import fontSizes from '../variables/font-sizes'
import lineHeights from '../variables/line-heights'
import mediaQueries from '../variables/media-queries'
import colors from '../variables/colors'
import { layoutHalf } from '../variables/layout'

const StyledP = styled.p`
  font-size: ${fontSizes.textBase};
  line-height: ${lineHeights.textBase};
  color: ${colors.black};
  margin-bottom: ${layoutHalf};

  ${mediaQueries.aboveTablet} {
    font-size: ${fontSizes.textLarge};
    line-height: ${lineHeights.textLarge};
  }

  ${mediaQueries.aboveDesktop} {
    font-size: ${fontSizes.textXLarge};
    line-height: ${lineHeights.textXLarge};
  }
`

export default StyledP
