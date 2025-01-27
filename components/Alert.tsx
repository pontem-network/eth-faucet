import { Alert as MuiAlert, AlertProps, styled } from "@mui/material"


const StyledAlert = styled(MuiAlert)(({ theme, severity }) => ({
  marginTop: theme.spacing(2),
  border: "1.5px solid #FFBB1299",
  borderRadius: "16px",
  background: "#40321e",
  color: "white",
  display: "flex",
  alignItems: "center",
  width: "100%",

  "svg": {
    color: severity === "success" ? "#55b84b" : "#B4861A",
  }
}))

export const Alert = ({ children, severity }: AlertProps) => <StyledAlert severity={severity}>{children}</StyledAlert>
