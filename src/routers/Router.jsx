import {
    createBrowserRouter, 
    createRoutesFromElements,
    Route, 
    RouterProvider,
} from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Brances from '../pages/Brances';
import Members from '../pages/Members';
import Stuffs from '../pages/Stuffs';
import Lone from '../pages/Lone';
import Reports from '../pages/Reports';
import Login from "../pages/Login";

function Router() { 
 const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route path="/" element={<AdminDashboard/>}>
          <Route index element={<Home/>}/>
          <Route path="/Brances" element={<Brances/>}/>
          <Route path="/Members" element={<Members/>}/>
          <Route path="/Stuffs" element={<Stuffs/>}/>
          <Route path="/Lone" element={<Lone/>}/>
          <Route path="/Reports" element={<Reports/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
    </Route>
   
 ))
  return (
    <RouterProvider router={router}/>
  )
}

export default Router