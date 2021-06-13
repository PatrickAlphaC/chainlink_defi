import { useContractCall, useEthers } from "@usedapp/core";
import TokenFarm from "../abis/TokenFarm.json";
import { utils, BigNumber } from "ethers";

export const useStakingBalance = (address: string): BigNumber | undefined => {
  const { account, chainId } = useEthers();

  const { abi, networks } = TokenFarm;
  const tokenFarmInterface = new utils.Interface(abi);

  const tokenFarmData = chainId ? networks[chainId] : undefined;

  const { address: tokenFarmContractAddress } = tokenFarmData || {}

  const [stakingBalance] =
    useContractCall({
      abi: tokenFarmInterface,
      address: tokenFarmContractAddress,
      method: "stakingBalance",
      args: [address, account],
    }) ?? [];

  return stakingBalance;
};
