import { useContractFunction, useEthers } from "@usedapp/core";
import TokenFarm from "../abis/TokenFarm.json";
import { utils, constants } from "ethers";
import { Contract } from "@ethersproject/contracts";

export const useStakeTokens = () => {
  const { chainId } = useEthers();

  const { abi, networks } = TokenFarm;
  const tokenFarmInterface = new utils.Interface(abi);

  const tokenFarmData = chainId ? networks[chainId] : undefined;

  const { address: tokenFarmContractAddress } = tokenFarmData || { address: constants.AddressZero};

  const contract = new Contract(tokenFarmContractAddress, tokenFarmInterface) 

  return useContractFunction(contract, "stakeTokens", {
    transactionName: "Stake tokens",
  });
};
