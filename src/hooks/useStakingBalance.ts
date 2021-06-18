import { useContractCall, useEthers } from "@usedapp/core";
import TokenFarm from "../abis/TokenFarm.json";
import { utils, BigNumber } from "ethers";

/**
 * Get the staking balance of a certain token by the user in our TokenFarm contract
 * @param address - The contract address of the token
 */
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
