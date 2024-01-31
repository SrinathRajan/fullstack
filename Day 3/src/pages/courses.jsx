// Import React and CSS
// import React from "react";
import "../assets/css/courses.css";

// Define a chess course component
function ChessCourse(props) {
  // Destructure the props
  const { title, description, image, price, applyNow } = props;

  // Return the JSX element
  return (
    <div className="chess-course">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt="Chess course" />
      <p>Price: ₹{price}</p>
      <button onClick={applyNow}>Apply Now</button>
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
    },
    {
      title: "Beginner Chess Course Level-2[Medium]",
      description: "Improve your chess skills, from the middlegame strategies and endgame techniques to the calculation and evaluation skills.",
      image: "course2.jpg",
      price: 500,
    },
    {
      title: "Advanced Chess Course Level-3[Hard]",
      description: "Master the chess secrets, from the complex variations and positional play to the psychological and practical aspects of the game.",
      image: "course3.jpg",
      price: 1000,
    },
    {
      title: "Intermediate Chess Course Level-1[Easy]",
      description: "Learn the basics of chess, from the rules and moves to the opening principles and tactics.",
      image: "course1.jpg",
      price: 500,
    },
    {
      title: "Intermediate Chess Course Level-2[Medium]",
      description: "Improve your chess skills, from the middlegame strategies and endgame techniques to the calculation and evaluation skills.",
      image: "course2.jpg",
      price: 1000,
    },
    {
      title: "Intermediate Chess Course Level-2[Hard]",
      description: "Master the chess secrets, from the complex variations and positional play to the psychological and practical aspects of the game.",
      image: "course3.jpg",
      price: 2000,
    },
    {
      title: "Advanced Chess Course Level-1[Easy]",
      description: "Master the chess secrets, from the complex variations and positional play to the psychological and practical aspects of the game.",
      image: "course3.jpg",
      price: 1500,
    },
    {
      title: "Advanced Chess Course Level-2[Medium]",
      description: "Master the chess secrets, from the complex variations and positional play to the psychological and practical aspects of the game.",
      image: "course3.jpg",
      price: 2000,
    },
    {
      title: "Advanced Chess Course Level-3[Hard]",
      description: "Master the chess secrets, from the complex variations and positional play to the psychological and practical aspects of the game.",
      image: "course3.jpg",
      price: 2500,
    }
    // Add more chess courses as needed
  ];

  // Define a function to handle applying to a course
  function applyNow() {
    // Implement your logic here
    alert("Applied to the course");
  }

  // Return the JSX element
  return (
    <div className="chess-academy">
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
