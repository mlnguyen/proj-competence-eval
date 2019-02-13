import React from "react"
import Hidden from "@material-ui/core/Hidden"
import Paper from "@material-ui/core/Paper"
import Typography from '@material-ui/core/Typography';
import ScreenRotation from "@material-ui/icons/ScreenRotation"

function SmallScreenWarning(props){
  const contentStyle = {
    position: "absolute",
    zIndex: 10,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    //justifyContent: "center",
    alignItems: "center",
    padding: "10%",
    textAlign: "center"
  }
  return (
    <Hidden smUp>
      <Paper style={contentStyle}>
        <ScreenRotation style={{fontSize: 48}}/>
        <Typography style={{marginTop: "2em"}}>
          Your screen is too small to correctly display this study.
          <br />
          Please rotate your device to landscape
          orientation or press "x" to exit this study.
        </Typography>
      </Paper>
    </Hidden>
  )
}

export default SmallScreenWarning