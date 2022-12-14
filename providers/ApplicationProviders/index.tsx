import React from "react";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../styles/global";
import theme from "../../styles/theme";

type Props = {
  children: React.ReactNode;
};

const ApplicationProviders: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ApplicationProviders;
