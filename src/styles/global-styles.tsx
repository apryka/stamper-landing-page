import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(102.8deg, #042E6F -1.12%, #001431 100.98%);
    color: ${(props) => props.theme.colors.white};
  }
  html {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
`;

export { GlobalStyles };
