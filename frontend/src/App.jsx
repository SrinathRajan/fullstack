// import CustomSidenav from "./components/CutomSidenav"
// import CustomNavbar from "./components/customNavbar"
// // import CustomSidenav from "./components/CutomSidenav"

// function App() {
  
//   return (
//     <>
//     <CustomNavbar />
// <CustomSidenav/>

// </>
//   )
// }
// export default App

// import Signup from "./pages/Signup"  
// import './assets/css/login.css'
// import React, { Suspense } from "react"
// import {RouterProvider, createBrowserRouter} from "react-router-dom"
// import { lazy } from "react"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Spinner from "./components/spinner"
// const lazyabout=lazy("./pages/about")
// const lazycontact=lazy("./pages/contact")
// const App=()=>{
//   const router = createBrowserRouter([
//     {
//       path: '/home',
//       element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
//     },
//     {
//       path: '/about',
//       element:<Suspense fallback={<Spinner/>}><About/></Suspense>
//     },
//     {
//       path: '/contact',
//       element:<Suspense fallback={<Spinner/>}><Contact/></Suspense>
//     }
//   ])

//     return (
//     <RouterProvider router={router}/>
//   )
// }

// export default App;

// import { Nav, Navbar } from "rsuite"
// import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';
// import { Link } from "react-router-dom";
// // import { NavbarContext } from "rsuite/esm/Navbar"

// const CustomNavbar=() =>{
//     return(
//         // <div>CustomNavabar</div>
//         <Navbar>
//     <Navbar.Brand href="#">RSUITE</Navbar.Brand>
//     <Nav>
//       <Nav.Item icon={<HomeIcon />}><Link to={/home}>Home</Link></Nav.Item>
//       <Nav.Item><Link to={/about}>About</Link></Nav.Item>
//       <Nav.Item><Link to={/contact}>Contact</Link></Nav.Item>
//       {/* <Nav.Menu title="About">
//         <Nav.Item>Company</Nav.Item>
//         <Nav.Item>Team</Nav.Item>
//         <Nav.Menu title="Contact">
//           <Nav.Item>Via email</Nav.Item>
//           <Nav.Item>Via telephone</Nav.Item>
//         </Nav.Menu>
//       </Nav.Menu> */}
//     </Nav>
//     <Nav pullRight>
//       <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
//     </Nav>
//   </Navbar>
//     )
// }
// export default CustomNavbar

// import CustomSideNavbar from "./components/CustomSideNavbar"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
import { Suspense, lazy } from "react"
import Spinner from "./components/spinner.jsx";
const LazyAbout = lazy(()=>import("./pages/About.jsx"));
const LazyContact=lazy(()=>import("./pages/Contact.jsx"));
const LazyLogin=lazy(()=>import("./pages/login.jsx"));
const LazySignup=lazy(()=>import("./pages/signup.jsx"));
const LazyProfile=lazy(()=>import("./pages/profile.jsx"));
const LazyBuy=lazy(()=>import("./pages/buy.jsx"));
const LazyCourses=lazy(()=>import("./pages/courses.jsx"));
const LazyDashboard=lazy(()=>import("./pages/admin/dashboard.jsx"));
const LazyAdminprofile=lazy(()=>import("./pages/admin/adminprofile.jsx"));
const LazyGraph=lazy(()=>import("./pages/admin/graph.jsx"));
const LazyBccl1=lazy(()=>import("./pages/c1.jsx"));
const LazyBccl2=lazy(()=>import("./pages/c2.jsx"));
const LazyBccl3=lazy(()=>import("./pages/c3.jsx"));
const LazyBccl4=lazy(()=>import("./pages/c4.jsx"));
const LazyBccl5=lazy(()=>import("./pages/c5.jsx"));
const LazyBccl6=lazy(()=>import("./pages/c6.jsx"));
const LazyBccl7=lazy(()=>import("./pages/c7.jsx"));
const LazyBccl8=lazy(()=>import("./pages/c8.jsx"));
const LazyBccl9=lazy(()=>import("./pages/c9.jsx"));

// import CustomNavbar from "./components/customNavbar"

const App =() => {
  const router=createBrowserRouter([
    {
      path:'/home',
      element:<Suspense fallback={<Spinner />}><Home/></Suspense>
    },
    {
      path:'/about',
      element:<Suspense fallback={<Spinner />}><LazyAbout/></Suspense>
    },
    {
      path:'/contact',
      element:<Suspense fallback={<Spinner />}><LazyContact/></Suspense>
    },
    {
      path:'/login',
      element:<Suspense fallback={<Spinner />}><LazyLogin/></Suspense>
    },
    {
      path:'/signup',
      element:<Suspense fallback={<Spinner />}><LazySignup/></Suspense>
    },
    {
      path:'/profile',
      element:<Suspense fallback={<Spinner />}><LazyProfile/></Suspense>
    },
    {
      path:'/buy',
      element:<Suspense fallback={<Spinner />}><LazyBuy/></Suspense>
    },
    {
      path:'/courses',
      element:<Suspense fallback={<Spinner />}><LazyCourses/></Suspense>
    },
    {
      path:'/dashboard',
      element:<Suspense fallback={<Spinner />}><LazyDashboard/></Suspense>
    },
    {
      path:'/adminprofile',
      element:<Suspense fallback={<Spinner />}><LazyAdminprofile/></Suspense>
    },
    {
      path:'/graph',
      element:<Suspense fallback={<Spinner />}><LazyGraph/></Suspense>
    },
    {
      path:'/bccl1',
      element:<Suspense fallback={<Spinner />}><LazyBccl1/></Suspense>
    },
    {
      path:'/bccl2',
      element:<Suspense fallback={<Spinner />}><LazyBccl2/></Suspense>
    },
    {
      path:'/bccl3',
      element:<Suspense fallback={<Spinner />}><LazyBccl3/></Suspense>
    },
    {
      path:'/bccl4',
      element:<Suspense fallback={<Spinner />}><LazyBccl4/></Suspense>
    },
    {
      path:'/bccl5',
      element:<Suspense fallback={<Spinner />}><LazyBccl5/></Suspense>
    },
    {
      path:'/bccl6',
      element:<Suspense fallback={<Spinner />}><LazyBccl6/></Suspense>
    },
    {
      path:'/bccl7',
      element:<Suspense fallback={<Spinner />}><LazyBccl7/></Suspense>
    },
    {
      path:'/bccl8',
      element:<Suspense fallback={<Spinner />}><LazyBccl8/></Suspense>
    },
    {
      path:'/bccl9',
      element:<Suspense fallback={<Spinner />}><LazyBccl9/></Suspense>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
