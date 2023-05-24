import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var[hname,sethname] = useState("")
    const Changename1 = ()=>{
        sethname('Home Page')
    }
    const Changename2 = ()=>{
        sethname('Gallery Page')
    }
    const Changename3 =()=>{
        sethname('Contact Page')
    }
  return (
    <div>
        <br /><br />
        <Button variant="contained" color='secondary' onClick={Changename1}>Home </Button>
        <Button variant="contained" color='success' onClick={Changename2}>Gallery</Button>
        <Button variant="contained" onClick={Changename3}>Contact</Button>
        <br /><br />
        <Typography variant='h3'color={'blue'}>Welcome to {hname}</Typography>
    </div>
  )
}

export default State