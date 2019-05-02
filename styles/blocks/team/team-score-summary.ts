import styled from '../../styled-components'
import fontSizes from '../../base/variables/font-sizes'
import mediaQueries from '../../base/variables/media-queries'

const StyledTeamScoreSummary = styled.div`
  width: 50%;
  display: inline-block;
  font-size: ${fontSizes.textBase};

  ${mediaQueries.aboveTablet} {
    font-size: ${fontSizes.textLarge};
  }

  ${mediaQueries.aboveDesktop} {
    font-size: ${fontSizes.textXLarge};
  }
`

export default StyledTeamScoreSummary
