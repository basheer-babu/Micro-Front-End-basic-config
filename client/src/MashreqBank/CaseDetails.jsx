import React from 'react'
import { CaseDetailsStyle } from './StyleMashreqBank'
import { Card, Grid, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function CaseDetails() {
  return (
    <div >
        <div style={{display:"flex"}}>
            <Card style={{backgroundColor:"#1a237e",color:"#fff",padding:"4px"}}>Cases</Card>
            <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
            <Typography>Case ID:</Typography>
            <Typography>&nbsp; 9124783</Typography>
        </div>

        <div style={{marginTop:"10px",display:"flex"}}>
           
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <div style={{height:"70px",width:"70px",borderRadius:"50%",backgroundColor:"yellow",justifyContent:"center",alignItems:"center",display:"flex"}}>
               <Typography>A</Typography>
              </div>
            </div>
            <div style={{marginLeft:"15px"}}>
             <div style={{display:'flex'}}>
                <Typography>CIF No.:</Typography>
                <Typography>&nbsp; 9124783911</Typography>
                <div style={{backgroundColor:"black",width:"3px",height:"15px",marginTop:"3px",marginLeft:"5px",marginRight:"3px"}}></div>
                <Typography>CIF Status:</Typography>
                <Typography>&nbsp; Active</Typography>
                <div style={{backgroundColor:"black",width:"3px",height:"15px",marginTop:"3px",marginLeft:"5px",marginRight:"3px"}}></div>
                <Typography>Personal Account</Typography>
             </div>
             <div>
                <Typography variant='h5'>Alexy Fedinand Richard</Typography>
             </div>
            <div style={{display:"flex"}}>
            <Typography>Age of Relationships:</Typography>
                <Typography>&nbsp; 5 years</Typography>
                <div style={{backgroundColor:"black",width:"3px",height:"15px",marginTop:"3px",marginLeft:"5px",marginRight:"3px"}}></div>
                <Typography>RM:</Typography>
                <Typography>&nbsp; Mohamd Wasim</Typography>
                <div style={{backgroundColor:"black",width:"3px",height:"15px",marginTop:"3px",marginLeft:"5px",marginRight:"3px"}}></div>
                <Typography>Division:</Typography>
                <Typography>&nbsp; Retail</Typography>
                <div style={{backgroundColor:"black",width:"3px",height:"15px",marginTop:"3px",marginLeft:"5px",marginRight:"3px"}}></div>
                <Typography>Nationality:</Typography>
                <Typography>Indian</Typography>
                <div style={{backgroundColor:"black",width:"3px",height:"15px",marginTop:"3px",marginLeft:"5px",marginRight:"3px"}}></div>
                <Typography>UAE</Typography>
                <div style={{backgroundColor:"black",width:"3px",height:"15px",marginTop:"3px",marginLeft:"5px",marginRight:"3px"}}></div>
                <Typography>Indian</Typography>
            </div>

            </div>

        </div>
  <hr></hr>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <div >
    <Typography>Risk Score</Typography>
    <Typography style={{backgroundColor:"red",color:"#fff"}}>L3</Typography>
    </div>
    <div >
    <Typography>#ofUBO's</Typography>
    <Typography >03</Typography>
    </div>
    <div >
    <Typography>Date of Birth</Typography>
    <Typography >07/07/1997</Typography>
    </div>
    <div >
    <Typography>Profession</Typography>
    <Typography >Cheif Tech</Typography>
    </div>
    <div >
    <Typography>Source of Income</Typography>
    <Typography >Salaried</Typography>
    </div>
  </div>
<hr></hr>
<div style={{display:"flex"}}>
  <div>
<div style={{display:"flex"}}>
<Typography>Case Status:</Typography>
  <Typography > &nbsp;Resubmitted</Typography>
</div>
<div style={{display:"flex"}}>
<Typography>Deadline:</Typography>
  <Typography > &nbsp;25th jan 2022</Typography>
</div>
  </div>

  <div style={{marginLeft:"20px"}}>

  <div style={{display:"flex"}}>
<Typography>Case Created Date:</Typography>
  <Typography > &nbsp; 05 Jan 2023</Typography>
</div>
<div style={{display:"flex",backgroundColor:"grey",color:"#fff",borderRadius:"20px"}}>
<Typography>Assigned to:</Typography>
  <Typography > &nbsp;Radhika</Typography>
</div>

  </div>
  
</div>


    </div>
  )
}
