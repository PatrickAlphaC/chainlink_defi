import { useEffect, useState } from "react";
import { useContractFunction, useEthers } from "@usedapp/core";
import TokenFarm from "../abis/TokenFarm.json";
import Erc20 from "../abis/ERC20.json";
import { utils, constants } from "ethers";
import { Contract } from "@ethersproject/contracts";

export const useStakeTokens = (tokenAddress: string) => {
  const { chainId } = useEthers();

  const { abi, networks } = TokenFarm;
  const tokenFarmInterface = new utils.Interface(abi);

  const tokenFarmData = chainId ? networks[chainId] : undefined;

  const { address: tokenFarmContractAddress } = tokenFarmData || {
    address: constants.AddressZero,
  };

  const tokenFarmContract = new Contract(
    tokenFarmContractAddress,
    tokenFarmInterface
  );

  const { send: stakeTokensSend, state: stakeTokensState } =
    useContractFunction(tokenFarmContract, "stakeTokens", {
      transactionName: "Stake tokens",
    });

  const erc20Interface = new utils.Interface(Erc20.abi);

  const tokenContract = new Contract(tokenAddress, erc20Interface);

  const { send: approveErc20Send, state: approveErc20State } =
    useContractFunction(tokenContract, "approve", {
      transactionName: "Approve ERC20 transfer",
    });

  const [amountToStake, setAmountToStake] = useState("0");

  useEffect(() => {
    if (approveErc20State.status === "Success") {
      stakeTokensSend(amountToStake, tokenAddress);
    }
  }, [approveErc20State]);

  const send = (amount: string) => {
    setAmountToStake(amount);
    return approveErc20Send(tokenFarmContractAddress, amount);
  };

  const [state, setState] = useState(approveErc20State);

  useEffect(() => {
    if (approveErc20State.status === "Success") {
      setState(stakeTokensState);
    } else {
      setState(approveErc20State);
    }
  }, [approveErc20State, stakeTokensState]);

  return { send, state };
};
