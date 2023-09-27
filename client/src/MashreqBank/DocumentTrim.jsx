import { Button } from '@mui/base'
import React, { useState } from 'react'
import india from "../HelperFile/india.pdf"
import india1 from "../HelperFile/india1.jpg"
import { Modal } from '@mui/material'

export default function DocumentTrim() {

const[pdf,setpdf]=useState(false)

const canvas = document.getElementsByClassName("canvas1")
console.log(canvas);
// const context = canvas[0].getContext('2d');
// console.log(context);


const handleMouse=(e)=>{

    let xaxis=e.clientX
    let Yaxis=e.clientY
   

}

  return (
    <div >
<Button onClick={()=>{setpdf(!pdf)}}>View</Button >
<Modal  style={{display:"flex",alignItems:"center",justifyContent:"center"}}  open={pdf} onClose={()=>{setpdf(!pdf)}} >

{/* <embed   src={india} width="500px" height="500px" /> */}
<canvas className='canvas1'></canvas>
{/* <img id='canvas' onMouseMove={handleMouse} src={india1} style={{height:"400px",width:"400px"}}></img> */}
</Modal>
    </div>
  )
}
