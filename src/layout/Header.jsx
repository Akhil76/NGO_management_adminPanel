import { AppBar,Typography,Toolbar,Button } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const drawerWidth = 240;

function Header(props){
  
  return (
    <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
    }}
  >
     <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
          onClick={props.onClick}
        >
         <MenuIcon/>
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Admin Dashboard
        </Typography>
        <div style={{marginLeft:"auto"}}>
        <Button 
        color="inherit" 
        style={{textTransform:"none"}}
       
        >
            Logout
        </Button>
      </div>
      </Toolbar>
  </AppBar>
  )
}

export default Header