import "../Style/NavBar.css";

function NavBar() {

    
  return (
    <div className="navbar">
      <div className="logo-container">
        <div className="logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="#7ed957"/>
          </svg>
        </div>
        <h2 className="logo">RouteX</h2>
      </div>

      <ul className="menu">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>STORY</li>
        <li>VISA</li>
        <li>BLOG</li>
        <li>PAGE</li>
        <li>CONTACT</li>
      </ul>


      <div className="help-container">
        <div className="help-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.08 14.82 15.69 14.9 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.58C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5Z" fill="#2f7d32"/>
          </svg>
        </div>

        <p className="help">
          Need help? <span>(307) 555-0133</span>
        </p>
      </div>
    </div>
  );
}

export default NavBar;