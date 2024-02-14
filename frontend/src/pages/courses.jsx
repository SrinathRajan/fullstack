// Import React and CSS
// import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/courses.css";
import CustomNavbar from "../components/customNavbar"

// Define a chess course component
function ChessCourse(props) {
  // Destructure the props
  const { title, description, applyNow, url } = props;

  // Return the JSX element
  return (
    <div className="chess-course">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <img src={image} alt="Chess course" /> */}
      {/* <p>Price: ₹{price}</p> */}
      <br/>
      <Link to={url}><button>Apply Now</button></Link>
    </div>
  );
}

// Define a chess academy component
function ChessAcademy() {
  // Define some sample data
  const chessCourses = [
    {
      title: "Beginner Chess Course Level-1[Easy]",
      description: "Learn the basics of chess, from the rules and moves to the opening principles and tactics.",
      image: "course1.jpg",
      price: 250,
      url: "/bccl1",
    },
    {
      title: "Beginner Chess Course Level-2[Medium]",
      description: "Improve your chess skills, from the middlegame strategies and endgame techniques to the calculation and evaluation skills.",
      image: "course2.jpg",
      price: 500,
      url: "/bccl2",
    },
    {
      title: "Advanced Chess Course Level-3[Hard]",
      description: "Master the chess secrets, from the complex variations and positional play to the psychological and practical aspects of the game.",
      image: "course3.jpg",
      price: 1000,
      url: "/bccl3",
    },
    {
      title: "Intermediate Chess Course Level-1[Easy]",
      description: "Learn the basics of chess, from the rules and moves to the opening principles and tactics.",
      image: "course1.jpg",
      price: 500,
      url: "/bccl4",
    },
    {
      title: "Intermediate Chess Course Level-2[Medium]",
      description: "Improve your chess skills, from the middlegame strategies and endgame techniques to the calculation and evaluation skills.",
      image: "course2.jpg",
      price: 1000,
      url: "/bccl5",
    },
    {
      title: "Intermediate Chess Course Level-2[Hard]",
      description: "Master the chess secrets, from the complex variations and positional play to the psychological and practical aspects of the game.",
      image: "course3.jpg",
      price: 2000,
      url: "/bccl6",
    },
    {
      title: "Advanced Chess Course Level-1[Easy]",
      description: "Master the chess secrets, from the complex variations and positional play to the psychological and practical aspects of the game.",
      image: "course3.jpg",
      price: 1500,
      url: "/bccl7",
    },
    {
      title: "Advanced Chess Course Level-2[Medium]",
      description: "Master the chess secrets, from the complex variations and positional play to the psychological and practical aspects of the game.",
      image: "course3.jpg",
      price: 2000,
      url: "/bccl8",
    },
    {
      title: "Advanced Chess Course Level-3[Hard]",
      description: "Master the chess secrets, from the complex variations and positional play to the psychological and practical aspects of the game.",
      image: "course3.jpg",
      price: 2500,
      url: "/bccl9",
    }
    // Add more chess courses as needed
  ];
  
  // Define a function to handle applying to a course
  function applyNow() {
    // Implement your logic here
    // alert("Applied to the course");
  }
  
  // Return the JSX element
  return (
    <div className="chess-academy">
      <CustomNavbar/>
      <h1>Chess Academy - Online Chess Courses</h1>
      <div className="chess-grid">
        {chessCourses.map((course) => (
          <ChessCourse {...course} applyNow={applyNow} />
          ))}
      </div>
    </div>
  );
}

// Export the chess academy component
export default ChessAcademy;




// // // import React and CSS module
// import React from 'react';
// import styles from '../assets/css/chesscourse.module.css';

// // create a chess course component
// class ChessCourse extends React.Component {
//   // define the props for the component
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: props.name, // the name of the chess course
//       academy: props.academy, // the name of the chess academy
//       location: props.location, // the location of the chess academy
//       duration: props.duration, // the duration of the chess course
//       fee: props.fee, // the fee of the chess course
//       image: props.image, // the photo of the chess academy
//       applied: false // the status of the application
//     };
//   }

//   // define a method to handle the click of apply button
//   handleClick = () => {
//     this.setState({applied: true});
//     // redirect to the payment website page
//     window.location.href = "payment.html";
//   }

//   // render the component
//   render() {
//     return (
//       <div className={styles.chesscourse}>
//         <h2>{this.state.name}</h2>
//         <p>Academy: {this.state.academy}</p>
//         <p>Location: {this.state.location}</p>
//         <p>Duration: {this.state.duration}</p>
//         <p>Fee: {this.state.fee}</p>
//         {/* <img src={this.state.image} alt={this.state.academy} /> */}
//         <button onClick={this.handleClick} disabled={this.state.applied}>{this.state.applied ? "Applied" : "Apply"}</button>
//       </div>
//     );
//   }
// }

// // create a website page component
// class WebsitePage extends React.Component {
//   // render the component
//   render() {
//     return (
//       <div className={styles.websitepage}>
//         <h1>Welcome to Chess Course Finder</h1>
//         <p>Here you can find and apply for different types of chess courses in various colleges in India.</p>
//         <div className={styles.chesscourses}>
//           {/* create 10 chess course components with different props */}
//           <ChessCourse name="Basic Chess Course" academy="MBM Chess Academy" location="Kochi, Kerala" duration="3 months" fee="$99" image="mbm_chess_academy.jpg" />
//           <ChessCourse name="Intermediate Chess Course" academy="Pratibha Chess Academy" location="Fatehabad, Haryana" duration="6 months" fee="$199" image="pratibha_chess_academy.jpg" />
//           <ChessCourse name="Advanced Chess Course" academy="KP'S Chess Academy" location="Sangli, Maharashtra" duration="9 months" fee="$299" image="kps_chess_academy.jpg" />
//           <ChessCourse name="Master Chess Course" academy="Chess Gurukul" location="Chennai, Tamil Nadu" duration="12 months" fee="$399" image="chess_gurukul.jpg" />
//           <ChessCourse name="Chess Tactics Essentials" academy="Udemy" location="Online" duration="2.5 hours" fee="$14.99" image="udemy.jpg" />
//           <ChessCourse name="Chess Masterclass with Garry Kasparov" academy="MasterClass" location="Online" duration="7 hours" fee="$180" image="masterclass.jpg" />
//           <ChessCourse name="I Will Teach You How To Play Chess" academy="Skillshare" location="Online" duration="34 lessons" fee="$15" image="skillshare.jpg" />
//           <ChessCourse name="Chess Openings for Beginners" academy="Chess.com" location="Online" duration="10 lessons" fee="Free" image="chess_com.jpg" />
//           <ChessCourse name="Chess Strategy for Beginners" academy="Lichess.org" location="Online" duration="12 lessons" fee="Free" image="lichess_org.jpg" />
//           <ChessCourse name="Chess Endgames for Beginners" academy="YouTube" location="Online" duration="15 videos" fee="Free" image="youtube.jpg" />
//         </div>
//       </div>
//     );
//   }
// }

// // export the website page component
// export default WebsitePage;


