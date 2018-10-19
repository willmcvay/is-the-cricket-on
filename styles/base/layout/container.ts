import styled from '../../styled-components'
import { tablet, largeDesktop } from '../variables/media-widths'

const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;

  @media only screen and (min-width: ${tablet}) {
    width: 80%;
  }

  @media only screen and (min-width: ${largeDesktop}) {
    width: 65%;
  }
`

export default PageContainer
