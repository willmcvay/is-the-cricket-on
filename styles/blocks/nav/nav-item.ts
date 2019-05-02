import styled from '../../styled-components'
import colors from '../../base/variables/colors'
import { layoutBorderRadius, layoutHalf } from '../../base/variables/layout'
import fontSizes from '../../base/variables/font-sizes'
import mediaQueries from '../../base/variables/media-queries'

const StyledNavItem = styled.div`
  font-family: 'Rockwell', 'Helvetica', sans-serif;
  font-size: ${fontSizes.textLarge};
  display: block;
  width: 100%;
  margin-bottom: ${layoutHalf};

  ${mediaQueries.aboveDesktop} {
    margin-right: ${layoutHalf};

    &:last-child {
      margin-right: 0;
    }
  }

  ${mediaQueries.aboveTablet} {
    font-size: ${fontSizes.textXLarge};
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${colors.white};
    background: ${colors.deepBlue};
    display: block;
    font-weight: bold;
    text-align: center;
    border-radius: ${layoutBorderRadius};
    padding: ${layoutHalf};

    &:hover:enabled {
      background-color: ${colors.salmon};
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`

export default StyledNavItem
