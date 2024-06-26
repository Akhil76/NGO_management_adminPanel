import Dashboard from '@mui/icons-material/Dashboard';
import AddBox from '@mui/icons-material/AddBox';
import ExposureIcon from '@mui/icons-material/Exposure';
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; 
import ShowChartIcon from '@mui/icons-material/ShowChart';

export const SidebarDatas = [
    {
        title: "Dashboard",
        icon :<Dashboard/> ,
        Link : "/"
    },
    {
        title: "Brances",
        icon :<ExposureIcon/> ,
        Link : "/brances"
    },
    {
        title: "Members",
        icon :<AddBox/> ,
        Link : "/members" 
    },
    {
        title: "Stuffs",
        icon :<CategoryIcon/> ,
        Link : "/stuffs"    
    },
    {
        title: "Lone",
        icon :<CategoryIcon/> ,
        Link : "/lone"    
    },
    {
        title: "Reports",
        icon :<ShowChartIcon/> ,
        Link : "/reports"    
    },
    {
        title: "Settings",
        icon :<SettingsIcon/>,
        Link:"/settings",
        ExpandMoreIcon:<ExpandMoreIcon/>,
        ExpandLessIcon:<ExpandLessIcon/>,
        subnav:[
            {
                title:"Categories",
                Link:"/admin/categories"
            },
            {
                title:"add category",
                Link:"/admin/addcategory"
            },
        ]
    
        },
]