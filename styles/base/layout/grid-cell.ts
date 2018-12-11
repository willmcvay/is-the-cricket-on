import styled from '../../styled-components'
import { paleGrey, black, white } from '../../base/variables/colors'
import { layoutQuarter, layoutHalf } from '../../base/variables/layout'
import { textXSm } from '../variables/font-sizes'

const StyledGridCell = styled.div`
  font-size: ${textXSm};
  border-bottom: 1px solid ${paleGrey};
  background: ${props => (props.theme.invertColor ? paleGrey : white)};
  color: ${props => (props.theme.invertColor ? white : black)};
  padding: ${layoutQuarter};
  :last-child {
    margin-bottom: ${layoutHalf};
  }
`
export default StyledGridCell
