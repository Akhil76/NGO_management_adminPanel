import {Typography,Grid } from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";



function Home() {
  
  return (
    <div>
      <Breadcrumb/>
      <Grid container>
        <Card Title="Today's Collections"/>
        <Card Title="Running Loan"/>
        <Card Title="Running Loan Amounts"/>
        <Card Title="Total Savings"/>
        <Card Title="Total Balance"/>
        <Card Title="Members"/>
        <Card Title="Stuffs"/>
        <Card Title="Expenses"/>
        <Card Title="Outgoing"/>
      </Grid>
    </div>
  )
}

export default Home