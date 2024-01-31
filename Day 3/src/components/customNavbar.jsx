// import { Navbar, Nav } from 'rsuite';
// import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';

// const CustomNavbar = () => {
//     return (
//         <div>
//             <Navbar>
//     <Navbar.Brand href="#">Chess Academy</Navbar.Brand>
//     <Nav>
//       <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
//       <Nav.Item>News</Nav.Item>
//       <Nav.Item>Products</Nav.Item>
//       <Nav.Menu title="About">
//         <Nav.Item>Company</Nav.Item>
//         <Nav.Item>Team</Nav.Item>
//         <Nav.Menu title="Contact">
//           <Nav.Item>Via email</Nav.Item>
//           <Nav.Item>Via telephone</Nav.Item>
//         </Nav.Menu>
//       </Nav.Menu>
//     </Nav>
//     <Nav pullRight>
//       <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
//     </Nav>
//   </Navbar>
//         </div>
//     );
// }

// export default CustomNavbar;

// import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import OffIcon from '@rsuite/icons/Off';
// import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    return (
        <div>
            <Navbar id='nav'>
              <Navbar.Brand href="#">Chess Academy</Navbar.Brand>
              <Nav>
                <Nav.Item icon={<HomeIcon />}> <Link to={`/home`}>Home</Link></Nav.Item>
                <Nav.Item><Link to={`/about`}> About</Link></Nav.Item>
                <Nav.Item><Link to={`/contact`}>Contact</Link></Nav.Item>
                <Nav.Item><Link to={`/profile`}>Profile</Link></Nav.Item>
                <Nav.Item><Link to={`/buy`}>Buy</Link></Nav.Item>
                <Nav.Item><Link to={`/courses`}>Courses</Link></Nav.Item>
              </Nav>
              <Nav pullRight>
                <Nav.Item icon={<OffIcon />}><Link to={`/login`}>Logout</Link></Nav.Item>
                {/* <Nav.Item icon={<CogIcon />}>Settings</Nav.Item> */}
              </Nav>
            </Navbar>
        </div>
    );
  }
  
  export default CustomNavbar;
  
  {/* <Nav.Item>News</Nav.Item>
<Nav.Item>Products</Nav.Item> */}



{/* <Nav.Item>Company</Nav.Item>
<Nav.Item>Team</Nav.Item> */}



{/* <Nav.Item>Via email</Nav.Item>
<Nav.Item>Via telephone</Nav.Item> */}
{/* </Nav.Menu>
</Nav.Menu> */}



{/* <Nav pullRight>
  <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
</Nav> */}