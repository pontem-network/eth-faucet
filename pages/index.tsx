import type { NextPage } from "next"
import { formatEther } from "@ethersproject/units"
import { useEthers } from "@usedapp/core"
import { useCallback, useEffect, useReducer, useState } from "react"
import Web3 from 'web3';

import { Alert } from "../components/Alert"
import { ClaimButton } from "../components/ClaimButton"
import { Item, ItemsWrapper } from "../components/Item"
import { FormWrapper }  from "../components/RoundedBox"
import { useWalletClassification } from "../hooks/useWalletClassification"

const web3 = new Web3(new Web3.providers.HttpProvider("https://devnet.lumio.network"));

type Action =
  | {
      type: "success"
    }
  | {
      type: "default"
    }
  | {
      type: "error"
      error: string
    }

interface State {
  status: "success" | "default" | "error";
  error?: string;
}

const initialState: State = {
  status: "default",
  error: undefined,
}

const reducer = (_: State, action: Action): State => {
  switch (action.type) {
    case "error":
      return { status: "error", error: action.error }
    case "success":
      return { status: "success" }
    default:
      return { status: "default" }
  }
}

const getBalance = async () => {

}

const Home: NextPage = () => {
  const { account } = useEthers()
  const [state, dispatch] = useReducer(reducer, initialState)
  const [balance, setBalance] = useState('');
  const [retrieveAmount] = useWalletClassification()


  const handleSuccess = () => dispatch({ type: "success" })

  const handleError = (error: string) => dispatch({ type: "error", error })

  const renderAlert = useCallback(() => {
    switch (state.status) {
      case "success":
        return (
          <Alert severity="success">
            Lumio L2 ETH has been sent to your wallet. You should receive it within a few seconds.
          </Alert>
        )
      case "error":
        return <Alert severity="error">{state.error}</Alert>
      default:
        return null
    }
  }, [state.status, state.error])


  useEffect(() => {
    dispatch({ type : "default" })
  }, [account])

  useEffect(() => {
    if (!account) {
      setBalance('');
      return;
    };
    const getBalance = async () => {
      const _balance = await web3.eth.getBalance(account);
      let etherBalance = web3.utils.fromWei(_balance, 'ether');
      if (etherBalance === '0.') etherBalance = '0';
      setBalance(etherBalance);
    }

    getBalance();
  }, [account])

  return (
    <FormWrapper>
      <ItemsWrapper>
        <Item>
          <span>Wallet balance</span>
          <span>{balance ? balance : <>&ndash;</>} ETH (testnet)</span>
        </Item>
        <Item>
          <span>Claimable Lumio L2 ETH</span>
          <span>{formatEther(retrieveAmount(account))} ETH (testnet)</span>
        </Item>
      </ItemsWrapper>
      <ClaimButton onSuccess={handleSuccess} onError={handleError} />
      {renderAlert()}
    </FormWrapper>
  )
}

export default Home
