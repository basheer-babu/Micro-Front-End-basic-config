import { Card, TextField, Typography } from '@mui/material'
import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TaskIcon from '@mui/icons-material/Task';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function SerchingComponent() {
  return (
    <div style={{marginLeft:"50px"}}>
        <div>
        <div style={{display:"flex"}}>
            <TextField 
            fullWidth
            placeholder='Case id/alert id/cif no./Customer id'
            inputProps={{
                style: {
                  height:"45px",
                  padding: '0 14px',
                },
            }}
            ></TextField>
        </div>
<Card  elevation={0}  style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px",height:"45px"}}>
<MessageIcon></MessageIcon>
<Typography>RM Response</Typography>
<div style={{color:"green"}}>Recieved</div>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
</Card>

<Card  elevation={0}  style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px",height:"45px"}}>
<TaskIcon></TaskIcon>
<Typography>STRs</Typography>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
</Card>

<Card elevation={0} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px",height:"45px"}}>
<AccountTreeIcon></AccountTreeIcon>
<Typography>Case Timeline</Typography>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
</Card>

<Card  elevation={0}  style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px",height:"45px",backgroundColor:"orange"}}>
<AddCircleOutlineIcon></AddCircleOutlineIcon>
<Typography>Create New Alert</Typography>
<ArrowForwardIosIcon></ArrowForwardIosIcon>
</Card>
        </div>
    </div>
  )
}
