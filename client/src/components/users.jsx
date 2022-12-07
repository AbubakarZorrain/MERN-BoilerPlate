import React,{ useEffect, useState } from "react";
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import {TableRow} from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
export default function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8000/crud/homecrud')
    .then((res)=>res.json())
    .then((data)=>{
      setUsers(data)
    })

  },[])
  
    return (
      <div>
        <h1>Users</h1>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Date Joined</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user,index)=>{
                return(
                  <TableRow key={index}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.created_at}</TableCell>
                  </TableRow>
                )
              }
              )}
            </TableBody>
        </Table>
      </div>
    );
}