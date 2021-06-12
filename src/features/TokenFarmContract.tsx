import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Panel, PanelContent, PanelHeading } from "../components";
import { Button, Tab } from "@material-ui/core";
import { Token } from "./Main";
import { StakingBalance } from "./StakingBalance";

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

  return (
    <Panel>
      <PanelHeading>The TokenFarm Contract</PanelHeading>
      <PanelContent>
        <TabContext value={selectedTokenIndex.toString()}>
          <TabList onChange={handleChange} aria-label="stake form tabs">
            {supportedTokens.map((token, index) => {
              return <Tab label={token.name} value={index.toString()} />;
            })}
          </TabList>
          {supportedTokens.map((token, index) => {
            return (
              <TabPanel value={index.toString()}>
                <StakingBalance token={token} />
                <Button color="secondary">Un-stake all</Button>
              </TabPanel>
            );
          })}
        </TabContext>
      </PanelContent>
    </Panel>
  );
};
