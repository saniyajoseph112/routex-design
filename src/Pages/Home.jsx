import "../Style/Home.css";
import bgImage from "../assets/home.jpg";

function Home() {
  return (
    <div 
      className="home" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <h1>
          Journey with Confidence <br />
          <span>Migrate</span> with Us
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          rcus nunc. Duis egestas ac ante sed tincidunt.
        </p>

        <button>Learn More →</button>
      </div>
    </div>
  );
}

export default Home;