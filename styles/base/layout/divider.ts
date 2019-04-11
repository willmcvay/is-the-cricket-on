import styled from '../../styled-components'
import { layoutHalf, layoutBase, layoutQuarter } from '../variables/layout'

const StyledDivider = styled.div`
  margin-bottom: ${props =>
    props.theme.size === 'HALF'
      ? layoutHalf
      : props.theme.size === 'QUARTER'
      ? layoutQuarter
      : layoutBase};
`

export default StyledDivider
