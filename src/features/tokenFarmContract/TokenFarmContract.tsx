import React, { useState } from "react";
import { useEthers } from "@usedapp/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import {
  Panel,
  PanelContent,
  PanelHeading,
  ConnectionRequiredMsg,
} from "../../components";
import { Tab } from "@material-ui/core";
import { Token } from "../Main";
import { Unstake } from "./Unstake";

interface TokenFarmContractProps {
  supportedTokens: Array<Token>;
}

export const TokenFarmContract = ({
  supportedTokens,
}: TokenFarmContractProps) => {
  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedTokenIndex(parseInt(newValue));
  };

  const { account } = useEthers();

  const isConnected = account !== undefined;

  return (
    <Panel>
      <PanelHeading>The TokenFarm Contract</PanelHeading>
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
                  <Unstake token={token} />
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
