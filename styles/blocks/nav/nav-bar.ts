import styled from '../../styled-components'
import { desktop } from '../../base/variables/media-widths'

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${desktop}) {
    flex-direction: row;
  }
`
export default StyledNavBar
