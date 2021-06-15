import React from "react";
import { Header } from "./features/Header";
import { Main } from "./features/Main";
import { ChainId, DAppProvider } from "@usedapp/core";
import { Container, ThemeProvider } from "@material-ui/core";
import customTheme from "./themes/chainlink-blue";

export const App = () => {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan],
      notifications: {
        expirationPeriod: 1000,
        checkInterval: 1000
      }
    }}>
      <ThemeProvider theme={customTheme}>
        <Header />
        <Container maxWidth="md">
          <Main />
        </Container>
      </ThemeProvider>
    </DAppProvider>
  );
};