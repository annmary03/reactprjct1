import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, responsiveFontSizes } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useState } from 'react'

const Ict = () => {
  var[names,setnames]=useState([{
    name:'Tiya',
    age: '20'},{
      name:'Jude',
      age: '18'},{
        name: 'Meera',
        age: '20'}
      ]
  )
  return (
    <div style={{paddingTop: "50px"}}>
        <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{color: "white", fontSize:"40px",backgroundColor: "black"}}>Name</TableCell>
              <TableCell style={{color: "white", fontSize:"40px",backgroundColor: "black"}}>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {names.map((value,index)=>{
              return(
                <TableRow>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.age}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Ict