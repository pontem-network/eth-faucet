import type { AppProps } from "next/app"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { PontemL2, DAppProvider, Config } from "@usedapp/core"
import Head from "next/head"
import { FormHeader } from "../components/FormHeader"
import { Content } from "../components/Content"
import { pollingInterval } from "../consts/env"
import { CaptchaProvider } from "../components/CaptchaProvider"
import { AppLayout } from "../components/AppLayout"

const config: Config = {
  readOnlyChainId: PontemL2.chainId,
  readOnlyUrls: {
    [PontemL2.chainId]: process.env.NEXT_PUBLIC_ETH_API_URL as string
  },
  pollingInterval
}
const theme = createTheme()

const EthereumFaucet = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Claim Pontem L2 ETH</title>
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
