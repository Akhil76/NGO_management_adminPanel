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
import Login from "../pages/Login";

function Router() { 
 const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route path="/" element={<AdminDashboard/>}>
          <Route index element={<Home/>}/>
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