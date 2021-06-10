import React, { useState } from "react";
import chainlink from "../chainlink.png";
import dapp from "../dapp.png";
import dai from "../dai.png";
import { StakeForm, Token } from "./StakeForm";
import { Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";

export const Main = () => {
  const supportedTokens: Array<Token> = [
    {
      image: chainlink,
      address: "0xa36085F69e2889c224210F603D836748e7dC0088",
      name: "LINK",
    },
    {
        image: dai,
        address: "0xFab46E002BbF0b4509813474841E0716E6730136",
        name: "FAU"
    },
    {
      image: dapp,
      // TODO: Load DAPP token address
      address: "0x000",
      name: "DAPP",
    },
  ];

  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedTokenIndex(parseInt(newValue));
  };

  return (
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
  );
};
