// rafce
import React from 'react'
import { Button, TextField, Typography } from '@mui/material';

const Firstfile = () => {
  return (
    <div>
      <br /><br />
        <h1> Ann Mary Wilson</h1>
        <input placeholder='Name'/>
        <br/>
        <input type='password' placeholder='Password'/>
        <br/>
        <button>Submit</button>
        <br />
        <Typography variant='h1'>Ann Mary Wilson</Typography>
        <br />
        <TextField variant='outlined' label='Name'></TextField>
        <br />
        <TextField variant='filled' label='Name'></TextField>
        <br />
        <TextField variant='standard' label='Name'></TextField>
        <br/><br />
        <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Firstfile