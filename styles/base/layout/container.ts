import styled from '../../styled-components'
import { tablet, largeDesktop } from '../variables/media-widths'
import { midGrey } from '../variables/colors'
import { layoutBorderRadius } from '../variables/layout'

const PageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  background: ${midGrey};
  padding: 1rem;
  height: 90vh;
  max-width: 100%;
  border-radius: ${layoutBorderRadius};
  overflow: scroll;

  @media only screen and (min-width: ${tablet}) {
    max-width: 80%;
  }

  @media only screen and (min-width: ${largeDesktop}) {
    max-width: 65%;
  }
`

export default PageContainer
