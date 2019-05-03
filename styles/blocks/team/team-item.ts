import styled from '../../styled-components'
import fontSizes from '../../base/variables/font-sizes'
import mediaQueries from '../../base/variables/media-queries'
import { layoutHalf, layoutBase } from '../../base/variables/layout'

const StyledTeamItem = styled.div`
  font-size: ${fontSizes.textLarge};
  font-family: 'Rockwell', Helvetica, sans-serif;
  font-weight: bold;
  display: flex;
  margin-bottom: ${layoutHalf};
  align-items: center;

  > span {
    padding-left: ${layoutBase};
  }

  ${mediaQueries.aboveTablet} {
    font-size: ${fontSizes.textXLarge};
    width: 50%;
    flex-direction: row;
  }

  ${mediaQueries.aboveDesktop} {
    font-size: ${fontSizes.textXXLarge};
  }
`

export default StyledTeamItem
