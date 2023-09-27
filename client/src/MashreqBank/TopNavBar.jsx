import React from 'react'
import { TopNavbarStyle } from './StyleMashreqBank'
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
export default function TopNavBar() {
  return (
    <div style={TopNavbarStyle.firstdiv}>
        <div style={TopNavbarStyle.secondDiv}>
        <MenuIcon></MenuIcon>
        <Typography>Menu</Typography>
        </div>

<div style={TopNavbarStyle.thirdDiv}>
    <img style={TopNavbarStyle.imagestyle} src='https://mma.prnewswire.com/media/901616/Mashreq_Logo.jpg?p=facebook'></img>
</div>

<div style={TopNavbarStyle.fourthDiv}>
  <NotificationImportantIcon style={{height:"25px",width:"25px",borderRadius:"50%"}}></NotificationImportantIcon>
<img style={TopNavbarStyle.profileimagestyle} src='https://www.mashreqbank.com/-/jssmedia/Images/UAE/about-us/corporate-governance/profiles/management-5.ashx?h=666&iar=0&w=1078&hash=350A1C29BFCBA0A1E196991C2CE66638'></img>

    </div>

    </div>
  )
}
