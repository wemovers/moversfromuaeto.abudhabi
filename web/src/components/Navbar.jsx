import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1200);

  const isHome = location.pathname === '/';
  const isBlog = location.pathname === '/blog';

  useEffect(() => {
    setIsMobileNavActive(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 1200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location]);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const handleHashClick = (e, hash) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate(`/#${hash}`);
    } else {
      window.history.pushState({}, '', `/#${hash}`);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Styles
  const navLinkStyle = {
    color: '#601D49',
    fontSize: '15px',
    padding: '10px 20px',
    fontFamily: 'sans-serif',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textDecoration: 'none',
    transition: '0.3s',
    whiteSpace: 'nowrap',
  };

  const mobileMenuStyle = {
    display: isMobileNavActive ? 'flex' : 'none',
    flexDirection: 'column',
    position: 'fixed',
    top: '60px',
    left: 0,
    width: '100%',
    height: 'calc(100vh - 60px)',
    backgroundColor: '#ffffff',
    padding: '20px',
    zIndex: 9999,
    overflowY: 'auto',
    boxShadow: '0 5px 15px rgba(96, 29, 73, 0.15)',
  };

  const desktopMenuStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    gap: '10px',
  };

  const freeQuoteStyle = {
    backgroundColor: '#601D49',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px',
    transition: '0.3s',
    whiteSpace: 'nowrap',
  };

  return (
    <header
      id="header"
      className={`header d-flex align-items-center sticky-header ${isMobileNavActive ? 'mobile-nav-active' : ''}`}
      style={{
        backgroundColor: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '10px 0',
        boxShadow: '0px 2px 10px rgba(96, 29, 73, 0.08)'
      }}
    >
      <div
        className="container position-relative d-flex align-items-center justify-content-between"
        style={{ width: '100%', padding: '0 20px' }}
      >
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <img
            src={logo}
            alt="WeMovers Logo"
            style={{
              width: 'clamp(180px, 25vw, 255px)',
              height: 'auto',
              marginRight: '10px',
              maxWidth: '100%'
            }}
          />
        </Link>

        <nav
          id="navmenu"
          className="navmenu"
          style={{
            position: 'relative',
            zIndex: 10001
          }}
        >
          <ul style={isMobileView ? mobileMenuStyle : desktopMenuStyle}>
            <li>
              <Link
                to="/"
                className={isHome ? 'active' : ''}
                style={{ ...navLinkStyle, color: isHome ? '#BD5579' : '#601D49' }}
              >
                Home
              </Link>
            </li>
            <li>
              <a href="#mission" style={navLinkStyle} onClick={(e) => handleHashClick(e, 'mission')}>
                Mission
              </a>
            </li>
           
            <li>
              <a href="#services" style={navLinkStyle} onClick={(e) => handleHashClick(e, 'services')}>
                Services
              </a>
            </li>
            <li>
              <a href="#faq" style={navLinkStyle} onClick={(e) => handleHashClick(e, 'faq')}>
                FAQs
              </a>
            </li>
            <li>
              <a href="#contact" style={navLinkStyle} onClick={(e) => handleHashClick(e, 'contact')}>
                Contact Us
              </a>
            </li>
            <li>
              <Link
                to="/blog"
                className={isBlog ? 'active' : ''}
                style={{ ...navLinkStyle, color: isBlog ? '#BD5579' : '#601D49' }}
              >
                Blog
              </Link>
            </li>
          </ul>

          {isMobileView && (
            <i
              className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
              onClick={toggleMobileNav}
              style={{
                color: '#601D49',
                fontSize: '28px',
                lineHeight: 0,
                marginLeft: '10px',
                cursor: 'pointer',
                zIndex: 10000,
                position: 'relative',
              }}
            ></i>
          )}
        </nav>

        <a href="https://www.wemovers.ae/contact" style={freeQuoteStyle}>Free Quote</a>
      </div>
    </header>
  );
};

export default Navbar;