import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TopBar.css';

function TopBar() {
  const location = useLocation(); // get current URL

  // Helper function to map pathname to menu key
  const getActiveMenu = () => {
    const path = location.pathname;

    if (path === '/') return 'home';
    if (path.startsWith('/About')) return 'about';
    if (path.startsWith('/Tele') || path.startsWith('/IT') || path.startsWith('/Education') || path.startsWith('/Healthcare')) return 'industries';
    if (path.startsWith('/GetInsightsDetails')) return 'insights';
    if (path.startsWith('/GetPricingDetail')) return 'pricing';
    if (path.startsWith('/GetContactUs')) return 'contact';
    return '';
  };

  const activeMenu = getActiveMenu();

  return (
    <div style={{ fontFamily: "poppins" }}>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
        {/* Logo */}
        <Link className="navbar-brand"  to="/" >
          <img src="/img/logo.png" alt="Logo" height="40" className="logo-custom" />
        </Link>

        {/* Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <Link className={`nav-link ${activeMenu === 'home' ? 'active' : ''}`} to="/">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle d-flex align-items-center ${activeMenu === 'about' ? 'active' : ''}`}
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                About Us
                <i className="bi bi-chevron-down ms-2" style={{ fontSize: "12px" }}></i>
              </a>
              <ul className="dropdown-menu inner-dropdown">
                <li><Link className="dropdown-item" to="/AboutUsDetail">About Us</Link></li>
                <li><Link className="dropdown-item" to="/GetCompanyCalture">Company Culture</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle d-flex align-items-center ${activeMenu === 'industries' ? 'active' : ''}`}
                href="#"
                id="industriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Industries
                <i className="bi bi-chevron-down ms-1" style={{ fontSize: "12px" }}></i>
              </a>
              <ul className="dropdown-menu inner-dropdown">
                <li><Link className="dropdown-item" to="/Tele">Telecommunication</Link></li>
                <li><Link className="dropdown-item" to="/IT">Information Technology</Link></li>
                <li><Link className="dropdown-item" to="/Education">Education</Link></li>
                <li><Link className="dropdown-item" to="/Healthcare">Healthcare</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${activeMenu === 'insights' ? 'active' : ''}`} to="/GetInsightsDetails">Insights</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${activeMenu === 'pricing' ? 'active' : ''}`} to="/GetPricingDetail">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${activeMenu === 'contact' ? 'active' : ''}`} to="/GetContactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
     
         {/* <!-- Country dropdown --> */}
<li className="nav-item dropdown info inn globe-dropdown">
      <a className="nav-link d-flex align-items-center justify-content-center" 
           href="#" id="countryDropdown" role="button" data-bs-toggle="dropdown">
          {/* SVG flag icon */}
          <svg style={{marginTop: "-5px"}} width="45" height="25" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.769 22.5C18.2919 22.5 22.769 18.0228 22.769 12.5C22.769 6.97715 18.2919 2.5 12.769 2.5C7.2462 2.5 2.76904 6.97715 2.76904 12.5C2.76904 18.0228 7.2462 22.5 12.769 22.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.76914 3.5H9.76914C7.81914 9.34 7.81914 15.66 9.76914 21.5H8.76914" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.769 3.5C17.719 9.34 17.719 15.66 15.769 21.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.76904 16.5V15.5C9.60904 17.45 15.929 17.45 21.769 15.5V16.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.76904 9.5C9.60904 7.55 15.929 7.55 21.769 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M31.9099 10.7268C32.0976 10.54 32.402 10.54 32.5898 10.7268L36.096 14.2151L39.6022 10.7268C39.7899 10.54 40.0943 10.54 40.2821 10.7268C40.4698 10.9136 40.4698 11.2164 40.2821 11.4032L36.4359 15.2298C36.2482 15.4165 35.9438 15.4165 35.756 15.2298L31.9099 11.4032C31.7221 11.2164 31.7221 10.9136 31.9099 10.7268Z" fill="white" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <ul className="dropdown-menu dropdown-menu-end inner-dropdown" aria-labelledby="countryDropdown">
          <li><a className="dropdown-item" href="#"><img src="/img/ae.png" className="flag-icon"/> United Arab Emirates</a></li>
          <li><a className="dropdown-item" href="information technology.html"><img src="/img/um.png" className="flag-icon"/> United States</a></li>
          <li><a className="dropdown-item" href="#"><img src="/img/sa.png" className="flag-icon"/> Saudi Arabia</a></li>
          <li><a className="dropdown-item" href="healthcare.html"><img src="/img/pk.png" className="flag-icon"/> Pakistan</a></li>
        </ul>
      </li>
    

      </nav>
      <br /><br /><br /><br />
    </div>
  );
}

export default TopBar;
