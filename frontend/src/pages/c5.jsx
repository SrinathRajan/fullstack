const footerStyle = {
    backgroundColor: 'grey',
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
  };

const chess = () => {
    const handleEnroll = () => {
        alert('Course Applied Successfully');
      };
    return (
      <div>
        <div className="video-container">
          {/* Video component goes here */}
          {/* <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"
            title="Chess Fundamental"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <iframe width="100%" height="639" src="https://www.youtube.com/embed/y7jxcqANi6M" title="Chess game Hard level"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

        <div className="description-container" style={{margin:'100px'}}>
        <h1 style={{color:'black',fontSize:'25px'}}>Description</h1>
          <p style={{textAlignLast:'left',fontSize:'20px'}}>
          The fundamentals of chess form the cornerstone of effective gameplay, encompassing key principles across various aspects of the game. These fundamentals include opening principles, center control, piece development, king safety, pawn structure, tactical awareness, strategic planning, and endgame techniques. Mastery of these fundamentals is essential for players at all levels to improve their chess skills and compete effectively. By understanding and applying these principles, players can develop a solid foundation for strategic thinking, tactical execution, and overall proficiency in the game of chess.
          </p><br></br>
          <button style={{color:'black',backgroundColor:'green'}}onClick={handleEnroll}>Apply Now</button>
        </div>
        <footer style={footerStyle}>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Our Chess Academy is dedicated to providing innovative courses and solutions...</p>
        </div>
        <div className="footer-section">
      
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>


      </div>
    );
  };
  
  export default chess;