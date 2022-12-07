import React from "react";
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import {TableRow} from '@mui/material';
import { TableBody } from '@mui/material';
import { TableFooter } from '@mui/material';
import { TableCell } from '@mui/material';
export default class Users extends React.Component {
    
  render() {
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
                <TableRow>
                    <TableCell>Abubakar</TableCell> 
                    <TableCell>abubakarzorrain71@gmail.com</TableCell>
                    <TableCell>07 Dec 2022</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </div>
    );
  }
}