import styled from '../../styled-components'

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.gridColumns || `100%`};
`

export default StyledGridWrapper
