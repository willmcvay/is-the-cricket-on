import styled from '../../styled-components'
import colors from '../../base/variables/colors'
import { layoutQuarter, layoutHalf } from '../../base/variables/layout'
import fontSizes from '../variables/font-sizes'
import mediaQueries from '../variables/media-queries'

const StyledGridCell = styled.div`
  font-size: ${fontSizes.textSmall};
  border-bottom: 1px solid ${colors.paleGrey};
  background: ${props => (props.theme.invertColor ? colors.paleGrey : colors.white)};
  color: ${props => (props.theme.invertColor ? colors.white : colors.black)};
  padding: ${layoutQuarter};
  :last-child {
    margin-bottom: ${layoutHalf};
  }

  ${mediaQueries.aboveTablet} {
    font-size: ${fontSizes.textBase};
  }

  ${mediaQueries.aboveDesktop} {
    font-size: ${fontSizes.textLarge};
  }
`
export default StyledGridCell
