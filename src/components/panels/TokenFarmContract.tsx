import React from "react";
import { Token } from "./StakeForm";
import { Typography } from "@material-ui/core";
import { Panel } from "./Panel"

interface TokenFarmContractProps {
  supportedTokens: Array<Token>;
}

export const TokenFarmContract = ({ supportedTokens }: TokenFarmContractProps) => {
  return (
    <Panel>
      <Typography variant="h4">The TokenFarm contract</Typography>
    </Panel>
  );
};
