import "../Style/About.css";
import img1 from "../assets/im.jpg";
import img2 from "../assets/c.jpg";
import img3 from "../assets/b.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="about-left">
        <div className="image-grid">
          <img src={img1} alt="Professional woman" className="img-1" />
          <img src={img2} alt="Happy traveler" className="img-2" />
          <img src={img3} alt="Consultation" className="img-3" />
        </div>


        <div className="experience-box">
          <h2>10+</h2>
          <p>Years Of<br />Experience</p>
        </div>

      </div>

      <div className="about-right">
        <p className="about-tag">ABOUT US</p>
        <h1>Unknown Wanderlust<br />Your Journey into</h1>

        <p className="about-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.
        </p>

        <div className="about-features">
          <div className="feature">
            <span className="check-icon">✓</span>
            <div>
              <h4>Safety Guides</h4>
              <p>Lorem ipsum dolor sit amet, cons<br />actetur adipiscing elit</p>
            </div>
          </div>


          <div className="feature">
            <span className="check-icon">✓</span>
            <div>
              <h4>Passport Assistance</h4>
              <p>Lorem ipsum dolor sit amet, conse<br />ctetur adipiscing elit</p>
            </div>
          </div>
        </div>

        <button className="about-btn">Read More →</button>
      </div>
    </div>
  );
}

export default About;