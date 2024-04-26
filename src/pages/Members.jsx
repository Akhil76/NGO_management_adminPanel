import * as React from 'react';
import { useEffect,useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

function Members() {
  var [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allmembers`)
            .then(res => res.json())
            .then(res => setData(res))
            //.then(res => console.log(res))
            .catch(err => console.log(err))
  },[data]);
  console.log(data)
  //-----------------------------------For Table------------------------
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  //--------------------------------------------------------------------
  return (
    <div>
      <Typography>Member</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Picture</StyledTableCell>
              <StyledTableCell align="right">Mobile</StyledTableCell>
              <StyledTableCell align="right">Savings</StyledTableCell>
              <StyledTableCell align="right">LoneBalance</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         {
          data.map((member)=>
          <StyledTableRow>
          <StyledTableCell component="th" scope="row">
          {member.Name}
          </StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
          <StyledTableCell align="right">{member.Mobile}</StyledTableCell>
          <StyledTableCell align="right">{member.SavingsBalance}</StyledTableCell>
          <StyledTableCell align="right">{member.LoneBalance}</StyledTableCell>
        </StyledTableRow>
        )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Members