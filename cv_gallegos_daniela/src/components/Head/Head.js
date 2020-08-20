import React from 'react'
import {Grid, Paper, Container, Avatar} from '@material-ui/core'
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import PhoneSharpIcon from '@material-ui/icons/PhoneSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';
import './Head.css'

const Head = () => {
  return (
    <Grid container>
      <Paper className="cabecera">
          <div className="textRow">
            <h1>DANIELA</h1> <h1 className="textGray">GALLEGOS</h1>
          </div>
          <h4>DESARROLLADOR DE SOFTWARE</h4>
          <div className="textRow topMargin">
            <Container className="containIcon topBorderRound">
              <EmailSharpIcon fontSize="small" className="iconMargin" />
            </Container>
            <p>gallegosdaniela16@hotmail.com</p>
          </div>
          <div className="textRow">
            <Container className="containIcon">
              <PhoneSharpIcon fontSize="small" className="iconMargin" />
            </Container>
            <p>0999230056</p>
          </div>
          <div className="textRow">
            <Container className="containIcon">
              <HomeSharpIcon fontSize="small" className="iconMargin" />
            </Container>
            <p>Quito, Ecuador</p>
          </div>
          <div className="textRow">
            <Container className="containIcon bottomBorderRound">
              <CalendarTodaySharpIcon fontSize="small" className="iconMargin" />
            </Container>
            <p>16 / 10 / 1996</p>
          </div>
      </Paper>
      <Paper className="imagen">xs=12</Paper>
    </Grid>
  );
}
 
export default Head;