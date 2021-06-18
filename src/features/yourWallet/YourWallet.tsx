import React, { useState } from "react";
import { useEthers } from "@usedapp/core";
import { StakeForm } from "./StakeForm";
import { Tab, makeStyles } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import {
  Panel,
  PanelHeading,
  PanelContent,
  ConnectionRequiredMsg,
} from "../../components";
import { Token } from "../Main";
import { WalletBalance } from "./WalletBalance";

interface YourWalletProps {
  supportedTokens: Array<Token>;
}

const useStyles = makeStyles((theme) => ({
  tabContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(4),
  },
}));

export const YourWallet = ({ supportedTokens }: YourWalletProps) => {
  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedTokenIndex(parseInt(newValue));
  };

  const { account } = useEthers();

  const isConnected = account !== undefined;

  const classes = useStyles();

  return (
    <Panel>
      <PanelHeading>Your Wallet</PanelHeading>
      <PanelContent>
        {isConnected ? (
          <TabContext value={selectedTokenIndex.toString()}>
            <TabList onChange={handleChange} aria-label="stake form tabs">
              {supportedTokens.map((token, index) => {
                return (
                  <Tab
                    label={token.name}
                    value={index.toString()}
                    key={index}
                  />
                );
              })}
            </TabList>
            {supportedTokens.map((token, index) => {
              return (
                <TabPanel value={index.toString()} key={index}>
                  <div className={classes.tabContent}>
                    <WalletBalance
                      token={supportedTokens[selectedTokenIndex]}
                    />
                    <StakeForm token={supportedTokens[selectedTokenIndex]} />
                  </div>
                </TabPanel>
              );
            })}
          </TabContext>
        ) : (
          <ConnectionRequiredMsg />
        )}
      </PanelContent>
    </Panel>
  );
};
