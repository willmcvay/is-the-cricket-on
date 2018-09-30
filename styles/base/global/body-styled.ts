import styled from '../../styled-components'
import reset from './reset'

export default styled.body`
  @font-face {
    font-family: 'Raleway', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Raleway');
  }

  body {
    margin: 0;
  }

  ${reset};
`
