import { styled, Typography } from "@mui/material"

const HeaderDiv = styled("div")(({ theme }) => ({
  margin: `0 auto`,
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  minWidth: theme.spacing(40),
  maxWidth: theme.spacing(70),
  fontFamily: "Roboto",
  width: "100%",
  "& > h1": {
    ...theme.typography.h4,
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: '34px',
    lineHeight: '41px',
    letterSpacing: '0.004em',
    color: 'white',
    textAlign: 'center',
  },
  "& > p": {
    fontSize: '15px',
    fontWeight: '300',
    lineHeight: '23px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#b3b3b8',
    "& > b": {
      color: 'white'
    }
}
}))

export const FormHeader = () => {
  return (
    <HeaderDiv>
      <Typography variant="h1">Claim Lumio L2 ETH</Typography>
      <Typography variant="body2">
        <b>Lumio L2 ETH has no monetary value.</b> It means you can’t sell or exchange it for any goods or services. The
        only utility it has is testing your decentralized application (DApp).
      </Typography>
    </HeaderDiv>
  )
}
