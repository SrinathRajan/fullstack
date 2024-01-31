// import React from 'react';
// import CustomNavbar from '../components/custom_navbar';

// const Home = () => {
//     return (
//         <div>

//             <header>
//             <CustomNavbar/>
//             </header>

//             <main>
//                 <section>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui laboriosam tenetur reprehenderit et quisquam pariatur ut, aut dolore animi deserunt at? Suscipit porro aliquid, maxime dolore blanditiis numquam provident.</p>
//                 </section>
//                 <section className='testimonial__wrapper'>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui laboriosam tenetur reprehenderit et quisquam pariatur ut, aut dolore animi deserunt at? Suscipit porro aliquid, maxime dolore blanditiis numquam provident.</p>
//                 </section>
//                 <section>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui laboriosam tenetur reprehenderit et quisquam pariatur ut, aut dolore animi deserunt at? Suscipit porro aliquid, maxime dolore blanditiis numquam provident.</p>
//                 </section>
//                 <aside>

//                 </aside>
//             </main>
//             <footer>

//             </footer>
//         </div>
//     );
// }

// export default Home;

import CustomNavbar from "../components/customNavbar"
import "../assets/css/home.css"
const Home = () =>
{
    return (
        <div id="container">
            <CustomNavbar/>
            <div id="pic">
                <h1>welcome to chess Academy</h1>
            </div>
       </div>
    )
}
export default Home


// // Create your React components using JSX syntax
// // Create a header component
// function Header() {
//     return (
//       <div className="header">
//         <h1>Chess Academy</h1>
//         <p>Welcome to the online chess courses portal</p>
//       </div>
//     );
//   }
  
//   // Create a main component
//   function Main() {
//     // Define some sample data
//     const chessCourses = [
//       {
//         title: "Beginner Chess Course",
//         description: "Learn the basics of chess, from the rules and moves to the opening principles and tactics.",
//         image: "course1.jpg",
//         price: 500,
//       },
//       {
//         title: "Intermediate Chess Course",
//         description: "Improve your chess skills, from the middlegame strategies and endgame techniques to the calculation and evaluation skills.",
//         image: "course2.jpg",
//         price: 1000,
//       },
//       {
//         title: "Advanced Chess Course",
//         description: "Master the chess secrets, from the complex variations and positional play to the psychological and practical aspects of the game.",
//         image: "course3.jpg",
//         price: 2000,
//       },
//       // Add more chess courses as needed
//     ];
  
//     // Define a function to handle applying to a course
//     function applyNow() {
//       // Implement your logic here
//       alert("Applied to the course");
//     }
  
//     // Return the JSX element
//     return (
//       <div className="main">
//         {chessCourses.map((course) => (
//           <div className="div">
//             <h3>{course.title}</h3>
//             <p>{course.description}</p>
//             <img src={course.image} alt="Chess course" />
//             <p>Price: ₹{course.price}</p>
//             <button onClick={applyNow}>Apply Now</button>
//           </div>
//         ))}
//       </div>
//     );
//   }
  
//   // Create a footer component
//   function Footer() {
//     return (
//       <div className="footer">
//         <p>© 2024 Chess Academy. All rights reserved.</p>
//       </div>
//     );
//   }
  
//   // Create an app component
//   function App() {
//     return (
//       <div>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     );
//   }
  
//   // Render the app component to the div with an id of "root"
//   ReactDOM.render(<App />, document.getElementById("root"));
  