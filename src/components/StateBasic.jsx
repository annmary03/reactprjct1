import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
    // var pname="ann"
    var [pname,setpname] = useState("Ann")
    var[val,setval] =useState()
    const inputhandler = (e)=>{
        setval(e.target.value)
        console.log(val)
    }
    const changeName = ()=> {
        setpname(val)
        setval(" ");
    }

  return (
    <div>
      <br /><br />
        {/* using curly braces we access variables in reactjs */}
        <Typography variant='h4'>Hey {pname}<br /> Welcome To Home</Typography>
        <TextField variant='outlined' label='Name' value={val} onChange={inputhandler}></TextField>
        <br /><br />
        <Button variant="contained" onClick={changeName} >Change</Button>
    </div>
  )
}

export default StateBasic