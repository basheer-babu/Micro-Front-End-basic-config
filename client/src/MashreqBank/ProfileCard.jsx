import { Card, Typography } from '@mui/material'
import React from 'react'

export default function ProfileCard() {
  return (
    <Card sx={{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"}}>
        <div style={{justifyContent:"center",alignItems:"center",alignContent:"center"}}>
            
        
       <center ><div style={{height:"50px",width:"50px",borderRadius:"8px",backgroundColor:"yellow",display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"}}>
        <Typography>J</Typography>
        </div></center>
        <Typography> Jaap Meijer</Typography>
        <Typography>@jaapM2</Typography>
        </div>

    </Card>
  )
}
