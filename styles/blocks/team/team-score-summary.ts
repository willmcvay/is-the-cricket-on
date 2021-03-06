import styled from '../../styled-components'
import fontSizes from '../../base/variables/font-sizes'
import mediaQueries from '../../base/variables/media-queries'
import { layoutHalf, layoutBase } from '../../base/variables/layout'

const StyledTeamScoreSummary = styled.div`
  font-size: ${fontSizes.textLarge};
  font-family: 'Rockwell', Helvetica, sans-serif;
  font-weight: bold;
  display: flex;
  margin-bottom: ${layoutHalf};
  align-items: center;
  flex-direction: row;

  > section {
    padding-left: ${layoutBase};
    margin-bottom: ${layoutHalf};
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

export default StyledTeamScoreSummary
