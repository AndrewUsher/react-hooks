import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.primaryFont};
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }

  section {
    border: 1px solid #f5f5f5;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 20px auto 0 auto;
    max-width: 1200px;
    padding: 10px 30px;
    text-align: center;
    transition: all 400ms;
    width: 90%;

    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
      transform: translateY(-3px);
    }

    ul {
      margin: 0 auto;
      text-align: left;
    }
  }
`

export default GlobalStyle