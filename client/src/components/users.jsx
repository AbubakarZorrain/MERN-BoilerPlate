import React,{ useEffect } from "react";
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import {TableRow} from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import {Skeleton} from '@mui/material';
import { addUser } from "../counterSlice";
import {useDispatch, useSelector} from 'react-redux'
export default function Users(){
  const [showSkeleton, setSkeleton] = React.useState(true)
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user)
  useEffect(()=>{
    fetch('http://localhost:8000/crud/homecrud')
    .then((res)=>res.json())
    .then((data)=>{
      dispatch(addUser({username:data}))
      setSkeleton(false)
    })

  },[dispatch,user,setSkeleton])
  
    return (
      <div>
        {showSkeleton && 
        <div> 
        <Skeleton varient="text" animation="wave"/>
        <Skeleton varient="text" animation="wave"/>
        <Skeleton varient="text" animation="wave"/>
        <Skeleton varient="text" animation="wave"/>
        <Skeleton varient="text" animation="wave"/>
        <Skeleton varient="text" animation="wave"/>
        <Skeleton varient="text" animation="wave"/>
        <Skeleton varient="text" animation="wave"/>
        <Skeleton varient="text" animation="wave"/>
         </div>
          }
       {!showSkeleton &&
       <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Date Joined</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {user?.username.map((user,index)=>{
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
       }
        
      </div>
    );
}