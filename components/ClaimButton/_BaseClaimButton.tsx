import LoadingButton from "@mui/lab/LoadingButton"
import { useEthers } from "@usedapp/core"
import { isNil } from "lodash"
import Link from "next/link"
import { useEffect, useState } from "react"

import { hasMetamask } from "../../hooks/hasMetamask"
import { claimTokens, retrieveNonce } from "../../services/HttpClient"
import { messageTemplate } from "../../utils/textMessage"
import { Button } from './Button';
import { ConnectWrapper } from './ConnectWrapper'
import { JsonRpcProvider } from "@ethersproject/providers";
import { CHAIN_ID } from '../../constants';


type BaseClaimButtonProps = {
  onSuccess: () => void
  onError: (message: string) => void
  retrieveCaptcha: () => Promise<string>
}

export const BaseClaimButton = ({ onSuccess, onError, retrieveCaptcha }: BaseClaimButtonProps) => {
  const { account, library, isLoading: loading, switchNetwork, chainId, activate } = useEthers()
  const installed = hasMetamask()

  const [providers, setProviders] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const claimPontemL2Eth = async () => {
    try {
      if (isNil(library) || isNil(account)) {
        throw new Error("Wallet is not connected")
      }

      const captchaToken = await retrieveCaptcha()

      const nonce = await retrieveNonce()
      const message = messageTemplate(nonce)

      const signer = (library as JsonRpcProvider).getSigner()
      const signature = await signer.signMessage(message)

      await claimTokens(account as string, message, signature, captchaToken)
      onSuccess()
    } catch (e: any) {
      if (e.name === "AxiosError" && e.response.data.message) {
        onError(e.response.data.message)
        return
      }

      onError(e?.message || "Something went wrong")
    }
  }

  const addProvider = (provider: any) => {
    // @ts-ignore
    setProviders((oldProviders) => {
      const alreadyRegisteredProvider = oldProviders.find((item: any) => item?.info?.uuid === provider.info.uuid);
      if (alreadyRegisteredProvider) {
        return oldProviders;
      }
      return [...oldProviders, provider]
    })
  }


  useEffect(() => {
    function onPageLoad() {

      window.addEventListener(
        "eip6963:announceProvider",
        (event: any) => {
          addProvider(event.detail);
        }
      );

      window.dispatchEvent(new Event("eip6963:requestProvider"));
    }
    onPageLoad()
  }, [])

  const Modal = () => {
    return <ConnectWrapper>
      {providers.map((item: any) => <Button key={item?.info.name} onClick={() => {
        activate(item.provider);
        item.provider.enable()
        setShowModal(false);
      }}>{item?.info.name}</Button>)}
    </ConnectWrapper>
  }

  if (showModal) {
    return (
      <Modal />
    )
  }

  if (!installed) {
    return (
      <Link href="https://metamask.io/download/" passHref>
        <Button>
          INSTALL METAMASK
        </Button>
      </Link>
    )
  }

  if (loading) {
    return <LoadingButton variant="contained" loading  />
  }

  if (!account) {
    return (
      <Button onClick={() => setShowModal(true)} >
        CONNECT WALLET
      </Button>
    )
  }

  if (chainId !== Number(CHAIN_ID)) {
    return (
      <Button onClick={() => switchNetwork(Number(CHAIN_ID))} >
        SWITCH TO LUMIO L2 NETWORK
      </Button>
    )
  }

  return (
    <Button onClick={claimPontemL2Eth} >
      CLAIM LUMIO L2 ETH
    </Button>
  )
}
