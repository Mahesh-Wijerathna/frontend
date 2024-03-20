// dependencies

// local imports
import NavBar from "./components/Navbar";

const Home = () => {
  

  return (
    <div>
      
      <NavBar />
      
      <br />
      
      
    <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          fontSize: "20px",
          margin: "10px",
          outline: "none",
        }}
        onMouseOver={(e) => e.target.style.cursor = "pointer"}

        //* when the button is clicked, the user is redirected to the search page
        onClick={(e) => {
          window.location.href = "/search";
        }}
    >Search locations</button>   
      

      
      
    </div>
  );
};

export default Home;