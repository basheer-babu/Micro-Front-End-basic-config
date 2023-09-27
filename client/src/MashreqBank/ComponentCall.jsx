import React from 'react'
import CaseDetails from './CaseDetails'
import { Card, Grid } from '@mui/material'
import SerchingComponent from './SerchingComponent'
import MenuItems from './MenuItems'
import ProfileCard from './ProfileCard'
import AccoutDetails from './AccoutDetails'

export default function ComponentCall() {
  return (
  <div style={{padding:"30px"}}>
    <div>
<Grid container >
<Grid item  xs={12} sm={12} md={8} >
<CaseDetails></CaseDetails>
 </Grid>

 <Grid item xs={12}  sm={12}  md={4}>
<SerchingComponent></SerchingComponent>
 </Grid>
  </Grid>
  </div>
  <Card style={{marginTop:"30px"}}>
  <MenuItems></MenuItems>
  </Card>
<div style={{marginTop:"30px"}}>
<Grid container>
<Grid item xs={12} md={3}>
<ProfileCard></ProfileCard>
</Grid>

<Grid item xs={12} md={9}>
<AccoutDetails></AccoutDetails>
</Grid>
</Grid> 
</div>
    </div>
  )
}
