import "../Style/Services.css";
import bgImage from "../assets/services.jpg";

function Services() {

  return (
    <div 
      className="services-container"
      style={{ backgroundImage: `url(${bgImage})` }}>


      <div className="services-content">
        <p className="services-tag"> OUR SERVICES</p>
        <h1 className="services-title">
          Adventure Unleashed <br /> Discover Your Next
        </h1>


        <div className="services-cards">
          <div className="service-card">
            <div className="icon-circle">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h3>Food and Wine Tours</h3>
            <p>
              Dolor sit amet, consectetur adipiscing elit.
              Sed sit amet rcus nunc Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed
              sit amet rcus nunc. Duis egestas ac
            </p>
          </div>

          <div className="service-card">
            <div className="icon-circle">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>Travel Opportunities</h3>
            <p>
              Dolor sit amet, consectetur adipiscing elit.
              Sed sit amet rcus nunc Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed
              sit amet rcus nunc. Duis egestas ac
            </p>
          </div>

          <div className="service-card">
            <div className="icon-circle">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>  
            </div>


            <h3>Solo Travel Planning</h3>
            <p>
              Dolor sit amet, consectetur adipiscing elit.
              Sed sit amet rcus nunc Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed
              sit amet rcus nunc. Duis egestas ac
            </p>
            
          </div>
        </div>

        <div className="carousel-controls">
          <button className="carousel-btn">←</button>
          <button className="carousel-btn">→</button>
        </div>
      </div>
    </div>
  );
}

export default Services;