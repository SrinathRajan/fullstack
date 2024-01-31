// Import React and CSS
// import React from "react";
import "../assets/css/buy.css";
import "../assets/images/aboutbg.jpg"

// Define a chess board component
function ChessBoard(props) {
  // Destructure the props
  const { image, price, size, material, addToCart } = props;

  // Return the JSX element
  return (
    <div id='bmain'>
      <div id='blur'>
        <div className="chess-board">
          <img src={image} alt="Chess board" />
          <p>Price: ₹{price}</p>
          <p>Size: {size}</p>
          <p>Material: {material}</p>
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

// Define a chess store component
function ChessStore() {
  // Define some sample data
  const chessBoards = [
    {
      image: "aboutbg.jpg",
      price: 1500,
      size: "18 x 18 inches",
      material: "Wooden",
    },
    {
      image: "aboutbg.jpg",
      price: 1200,
      size: "16 x 16 inches",
      material: "Plastic",
    },
    {
      image: "aboutbg.jpg",
      price: 2000,
      size: "20 x 20 inches",
      material: "Metal",
    },
    {
      image: "aboutbg.jpg",
      price: 1500,
      size: "18 x 18 inches",
      material: "Glass",
    },
    {
      image: "aboutbg.jpg",
      price: 1200,
      size: "16 x 16 inches",
      material: "Marble",
    },
    {
      image: "aboutbg.jpg",
      price: 2000,
      size: "20 x 20 inches",
      material: "Magnetic",
    },
    {
      image: "aboutbg.jpg",
      price: 1500,
      size: "18 x 18 inches",
      material: "LED",
    },
    {
      image: "aboutbg.jpg",
      price: 1200,
      size: "16 x 16 inches",
      material: "Leather",
    },
    {
      image: "aboutbg.jpg",
      price: 2000,
      size: "20 x 20 inches",
      material: "Paper",
    },
    {
      image: "aboutbg.jpg",
      price: 1500,
      size: "18 x 18 inches",
      material: "Rubber",
    },
    {
      image: "aboutbg.jpg",
      price: 1200,
      size: "16 x 16 inches",
      material: "Ivory",
    },
    {
      image: "aboutbg.jpg",
      price: 2000,
      size: "20 x 20 inches",
      material: "Wood",
    },
    {
      image: "aboutbg.jpg",
      price: 1500,
      size: "18 x 18 inches",
      material: "Cardboard",
    },
    {
      image: "aboutbg.jpg",
      price: 1200,
      size: "16 x 16 inches",
      material: "Plastic",
    },
    {
      image: "aboutbg.jpg",
      price: 2000,
      size: "20 x 20 inches",
      material: "Metal",
    },
    // Add more chess boards as needed
  ];

  // Define a function to handle adding to cart
  function addToCart() {
    // Implement your logic here
    alert("Added to cart");
  }

  // Return the JSX element
  return (
    <div className="chess-store">
      <h1>Buy Chess Boards Online</h1>
      <div className="chess-grid">
        {chessBoards.map((board) => (
          <ChessBoard {...board} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

// Export the chess store component
export default ChessStore;
