import styled from '../../styled-components'
import { layoutTriple, layoutQuadruple } from '../variables/layout'
import mediaQueries from '../variables/media-queries'

const StyledImage = styled.img`
  object-fit: cover;
  width: ${layoutTriple};
  height: ${layoutTriple};
  border-radius: 50%;

  ${mediaQueries.aboveTablet} {
    width: ${layoutQuadruple};
    height: ${layoutQuadruple};
  }
`

export default StyledImage
