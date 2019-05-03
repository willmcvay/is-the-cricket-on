import styled from '../../styled-components'
import mediaQueries from '../../base/variables/media-queries'

const StyledMatchListItem = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.aboveTablet} {
    flex-direction: row;
  }
`

export default StyledMatchListItem
