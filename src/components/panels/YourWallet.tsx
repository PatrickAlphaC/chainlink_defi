import React, { useState } from "react";
import { StakeForm, Token } from "./StakeForm";
import { Tab, Typography } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Panel } from "./Panel"

interface YourWalletProps {
  supportedTokens: Array<Token>;
}

export const YourWallet = ({ supportedTokens }: YourWalletProps) => {
  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedTokenIndex(parseInt(newValue));
  };

  return (
    <Panel>
      <Typography variant="h4">Your wallet</Typography>
      <TabContext value={selectedTokenIndex.toString()}>
        <TabList onChange={handleChange} aria-label="stake form tabs">
          {supportedTokens.map((token, index) => {
            return <Tab label={token.name} value={index.toString()} />;
          })}
        </TabList>
        {supportedTokens.map((token, index) => {
          return (
            <TabPanel value={index.toString()}>
              <StakeForm token={supportedTokens[selectedTokenIndex]} />
            </TabPanel>
          );
        })}
      </TabContext>
    </Panel>
  );
};
