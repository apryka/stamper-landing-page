import React from "react";
import { ThemeProvider } from "styled-components";
// import { useStaticQuery, graphql } from "gatsby";
import { theme, GlobalStyles } from "../../styles";
// Components
import { CSSDebugger } from "../css-debugger";
import Footer from "../Footer";
import Logo from "../Logo";
import { LogoWrapper } from "./PageLayout.styles";
import Container from "../Container";

const PageLayout: React.FC = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //       }
  //     }
  //   }
  // `);

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      <CSSDebugger />
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Container>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
};

export default PageLayout;
