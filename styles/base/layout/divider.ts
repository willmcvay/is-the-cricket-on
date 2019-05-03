import styled from '../../styled-components'
import { layoutHalf, layoutBase, layoutQuarter } from '../variables/layout'
import colors from '../variables/colors'

const StyledDivider = styled.div`
  margin-bottom: ${props =>
    props.theme.size === 'HALF'
      ? layoutHalf
      : props.theme.size === 'QUARTER'
      ? layoutQuarter
      : layoutBase};
  border-bottom: 1px ${colors.paleGrey} solid;

  :last-child {
    border-bottom: none;
  }
`

export default StyledDivider
