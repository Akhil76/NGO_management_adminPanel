import { Typography } from "@mui/material"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function Breadcrumb() {
  
  return (
    <Breadcrumbs aria-label="breadcrumb" 
        style={{
        backgroundColor:"red",
        height:"40px",
        maxWidth:"100%",
        padding:"5px",
        paddingTop:"7px"
        }}
        >
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
  )
}

export default Breadcrumb
