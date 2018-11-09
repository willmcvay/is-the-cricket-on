import styled from '../../styled-components'
import { textSm } from '../../base/variables/font-sizes'
import { layoutDouble } from '../../base/variables/layout'

const StyledTeamItem = styled.p`
  width: 50%;
  display: inline-block;
  font-size: ${textSm};

  img,
  span {
    display: inline-block;
  }

  span {
    width: calc(100% - ${layoutDouble});
    /* vertical-align: top; */
    min-height: ${layoutDouble};
  }
`

export default StyledTeamItem
