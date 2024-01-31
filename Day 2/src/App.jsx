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
const LazySignup=lazy(()=>import("./components/signup.jsx"));
const LazyProfile=lazy(()=>import("./pages/profile.jsx"));
const LazyBuy=lazy(()=>import("./pages/buy.jsx"));
const LazyCourses=lazy(()=>import("./pages/courses.jsx"));
const LazyDashboard=lazy(()=>import("./pages/dashboard.jsx"));
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
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
