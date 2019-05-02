import styled from '../../styled-components'
import { desktop } from '../../base/variables/media-widths'
import { layoutBase } from '../../base/variables/layout'

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 ${layoutBase} 0;

  @media only screen and (min-width: ${desktop}) {
    flex-direction: row;
  }
`
export default StyledNavBar
