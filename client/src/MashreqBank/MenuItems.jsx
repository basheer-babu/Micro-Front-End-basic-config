import { Typography } from '@mui/material'
import React from 'react'

export default function MenuItems() {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",alignContent:"center"}}>
<div>
    <Typography>Overview</Typography>
</div>
<div>
    <Typography>Customer Details</Typography>
</div>
<div>
    <Typography>Account Details</Typography>
</div>
<div>
    <Typography>KYC</Typography>
</div>
<div>
    <Typography>Documents</Typography>
</div>
<div>
    <Typography>Behavior Analytics</Typography>
</div>
<div>
    <Typography>Automated Narative </Typography>
</div>
<div>
    <Typography>Take Action</Typography>
</div>

    </div>
  )
}
