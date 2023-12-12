import type { AppProps } from "next/app"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { DAppProvider, Config } from "@usedapp/core"
import Head from "next/head"

import { FormHeader } from "../components/FormHeader"
import { Content } from "../components/Content"
import { pollingInterval } from "../consts/env"
import { CaptchaProvider } from "../components/CaptchaProvider"
import { AppLayout } from "../components/AppLayout"
import '../styles/index.css';
import { CHAIN_ID, CHAIN_URL } from "../constants"


const config: Config = {
  readOnlyChainId: Number(CHAIN_ID),
  readOnlyUrls: {
    [Number(CHAIN_ID)]: CHAIN_URL
  },
  pollingInterval
}
const theme = createTheme()

const EthereumFaucet = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Claim Lumio L2 ETH</title>
    </Head>
    <CaptchaProvider>
      <DAppProvider config={config}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppLayout>
            <Content>
              <FormHeader />
              <Component {...pageProps} />
              {/*<OpenSourceMemo />*/}
            </Content>
          </AppLayout>
        </ThemeProvider>
      </DAppProvider>
    </CaptchaProvider>
  </>
)

export default EthereumFaucet
