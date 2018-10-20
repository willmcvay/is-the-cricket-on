import styled from '../../styled-components'
import { white, midBlue, blueGreen } from '../../base/variables/colors'
import { layoutBorderRadius, layoutHalf } from '../../base/variables/layout'
import { desktop } from '../../base/variables/media-widths'

const StyledNavItem = styled.div`
  display: block;
  width: 100%;
  margin-bottom: ${layoutHalf};

  @media only screen and (min-width: ${desktop}) {
    margin-right: ${layoutHalf};

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${white};
    background: ${midBlue};
    display: block;
    font-weight: bold;
    text-align: center;
    border-radius: ${layoutBorderRadius};
    padding: ${layoutHalf};

    &:hover:enabled {
      background-color: ${blueGreen};
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`

export default StyledNavItem
