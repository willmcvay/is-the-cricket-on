import styled from '../../styled-components'
import mediaQueries from '../variables/media-queries'
import colors from '../variables/colors'
import { layoutBorderRadius } from '../variables/layout'

const PageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  background: ${colors.white};
  padding: 1rem;
  min-height: 90vh;
  max-width: 100%;
  border-radius: ${layoutBorderRadius};

  ${mediaQueries.aboveTablet} {
    max-width: 80%;
    padding: 2rem;
  }

  ${mediaQueries.aboveDesktop} {
    max-width: 65%;
  }
`

export default PageContainer
