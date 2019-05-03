import styled from '../../styled-components'
import fontSizes from '../variables/font-sizes'
import lineHeights from '../variables/line-heights'
import mediaQueries from '../variables/media-queries'
import colors from '../variables/colors'
import { layoutDouble, layoutBase } from '../variables/layout'

interface HeaderProps {
  textCentered?: boolean
}

export const StyledH1 = styled.h1<HeaderProps>`
  font-family: 'Rockwell', 'Helvetica', sans-serif;
  font-size: ${fontSizes.h1Mob};
  font-weight: bold;
  margin: -1rem -1rem ${fontSizes.textBase};
  text-align: ${props => (props.textCentered && 'center') || 'left'};
  line-height: ${lineHeights.h1Mob};
  color: ${colors.gold};
  background: ${colors.deepBlue};
  border-radius: 5px 5px 0 0;
  padding: ${layoutBase};

  ${mediaQueries.aboveTablet} {
    font-size: ${fontSizes.h1};
    margin: -2rem -2rem ${fontSizes.textBase};
    line-height: ${lineHeights.h1};
    padding: ${layoutBase} ${layoutDouble};
  }
`

export const StyledH2 = styled.h2<HeaderProps>`
  font-family: 'Rockwell', 'Helvetica', sans-serif;
  font-size: ${fontSizes.h2Mob};
  font-weight: bold;
  margin: 0 0 ${fontSizes.textBase} 0;
  text-align: ${props => (props.textCentered && 'center') || 'left'};
  line-height: ${lineHeights.h2Mob};

  ${mediaQueries.aboveTablet} {
    font-size: ${fontSizes.h2};
    margin: 0 0 ${fontSizes.textBase} 0;
    line-height: ${lineHeights.h2};
  }
`

export const StyledH3 = styled.h3<HeaderProps>`
  font-family: 'Rockwell', 'Helvetica', sans-serif;
  font-size: ${fontSizes.h3Mob};
  font-weight: bold;
  margin: 0 0 ${fontSizes.textBase} 0;
  text-align: ${props => (props.textCentered && 'center') || 'left'};
  line-height: ${lineHeights.h3Mob};

  ${mediaQueries.aboveTablet} {
    font-size: ${fontSizes.h3};
    margin: 0 0 ${fontSizes.textBase} 0;
    line-height: ${lineHeights.h3};
  }
`

export const StyledH4 = styled.h4<HeaderProps>`
  font-family: 'Rockwell', 'Helvetica', sans-serif;
  font-size: ${fontSizes.h4Mob};
  font-weight: bold;
  margin: 0 0 ${fontSizes.textBase} 0;
  text-align: ${props => (props.textCentered && 'center') || 'left'};
  line-height: ${lineHeights.h4Mob};

  ${mediaQueries.aboveTablet} {
    font-size: ${fontSizes.h4};
    margin: 0 0 ${fontSizes.textBase} 0;
    line-height: ${lineHeights.h4};
  }
`
