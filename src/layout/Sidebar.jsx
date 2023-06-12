import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Toolbar, Box, } from '@mui/material';
import { SidebarDatas } from './SidebarData'
import { Link } from 'react-router-dom';



const drawerWidth = 240;
function Sidebar(props) {
  
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {SidebarDatas.map((val) => (
          <Link to={val.Link} style={{textDecoration:'none',color:"white"}}>
          <ListItem button >
            <ListItemIcon style={{color:"white"}}>
              {val.icon}
            </ListItemIcon>
            <ListItemText  primary={val.title} />
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>  */}
    </div>
  );

  const { onClose, open } = props;

  return (
    <Box
      component="nav"
      sx={{
         
        width: { sm: drawerWidth }, 
        flexShrink: { sm: 0 }
      }}
      aria-label="mailbox folders"
      
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor: "lightslategrey"}
          
          
        }}
        
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor: "lightslategrey"},
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}


export default Sidebar;