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
import { CHAIN_URL } from "../constants";
import { JoinWaitingList } from "../components/Modal/JoinWaitingList";

const web3 = new Web3(new Web3.providers.HttpProvider(CHAIN_URL));

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

const Home: NextPage = () => {
  const { account } = useEthers()
  const [state, dispatch] = useReducer(reducer, initialState)
  const [balance, setBalance] = useState('');
  const [retrieveAmount] = useWalletClassification();
  const [openModal, setOpenModal] = useState(false);

  const getBalance = async () => {
    if (!account) {
      setBalance('');
      return;
    };
    const _balance = await web3.eth.getBalance(account);
    let etherBalance = web3.utils.fromWei(_balance, 'ether');
    if (etherBalance === '0.') etherBalance = '0';
    setBalance(etherBalance);
  }

  const handleSuccess = () => {
    dispatch({type: "success"});
    setTimeout(() => {
      getBalance();
    }, 3000)
  }

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

  const onCloseModal = () => {
    setOpenModal(false);
  }


  useEffect(() => {
    dispatch({ type : "default" })
  }, [account])

  useEffect(() => {
    getBalance();
  }, [account])

  useEffect(() => {
    if (state.error === 'Your wallet address isn’t on the whitelist') {
      setOpenModal(true);
    }
  }, [state]);

  return (
    <FormWrapper>
      <ItemsWrapper>
        <Item>
          <span>Wallet balance</span>
          <span>{balance ? parseFloat(Number(balance).toFixed(6)) : <>&ndash;</>} ETH (testnet)</span>
        </Item>
        <Item>
          <span>Claimable Lumio L2 ETH</span>
          <span>{formatEther(retrieveAmount(account))} ETH (testnet)</span>
        </Item>
      </ItemsWrapper>
      <ClaimButton onSuccess={handleSuccess} onError={handleError} />
      {renderAlert()}
      {openModal && <JoinWaitingList onClose={() => onCloseModal()}/>}
    </FormWrapper>
  )
}

export default Home
