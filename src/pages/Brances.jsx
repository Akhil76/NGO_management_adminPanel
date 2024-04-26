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

function Brances() {
  var [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allbrances`)
            .then(res => res.json())
            .then(res => setData(res))
            //.then(res => console.log(res))
            .catch(err => console.log(err))
  },[]);
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
      <Typography>Brances</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Stuffs</StyledTableCell>
              <StyledTableCell align="right">Members</StyledTableCell>
              <StyledTableCell align="right">Balance</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         {
          data.map((brance)=>
          <StyledTableRow>
          <StyledTableCell component="th" scope="row">
          {brance.BranceName}
          </StyledTableCell>
          <StyledTableCell align="right">{brance.Address}</StyledTableCell>
          <StyledTableCell align="right">{brance.Stuff_Id.length}</StyledTableCell>
          <StyledTableCell align="right">{brance.Member_Id.length}</StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
        </StyledTableRow>
        )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Brances