import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiGet = () => {
    var[users,setusers]= useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        setusers(response.data)
        console.log(users)
    })
    .catch(err=>console.log(err))
    },[])
    

  return (
    <div style={{paddingTop:'70px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color: "white", fontSize:"40px",backgroundColor: "black"}}>Name</TableCell>
                        <TableCell style={{color: "white", fontSize:"40px",backgroundColor: "black"}}>Username</TableCell>
                        <TableCell style={{color: "white", fontSize:"40px",backgroundColor: "black"}}> Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((value,index)=>{
                        return (
                            <TableRow>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.username}</TableCell>
                                <TableCell>{value.email}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ApiGet