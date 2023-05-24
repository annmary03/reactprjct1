import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Naviigation = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={'black'} variant="h6" align='left'sx={{ flexGrow: 1 , fontWeight: 'bold'}}> Menu </Typography>
                <Button variant='text'><Link to={'/'} style={{textDecoration: 'none', color:'white'}}>Home</Link></Button>
                <Button variant='text'><Link to={'/first'}style={{textDecoration: 'none', color:'white'}}>First</Link></Button>
                <Button variant='text'><Link to={'/ict'}style={{textDecoration: 'none', color:'white'}}>Table</Link></Button>
                <Button variant='text'><Link to={'/axios'}style={{textDecoration: 'none', color:'white'}}>axios</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Naviigation