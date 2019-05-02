import styled from '../../styled-components'
import colors from '../variables/colors'

const StyledA = styled.a`
  text-decoration: none;
  color: ${colors.black};
  cursor: pointer;

  &:hover {
    color: ${colors.salmon};
  }
`

export default StyledA
