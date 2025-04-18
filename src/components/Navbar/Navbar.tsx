import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import logoSvg from '../../assets/images/LOGO_AZAV (INV).svg';

// Custom interface for the NavbarContainer props
interface NavbarContainerProps {
  $scrolled: boolean;
}

const NavbarContainer = styled(motion.nav)<NavbarContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${({ $scrolled }) => ($scrolled ? '0.8rem 0' : '1.5rem 0')};
  background: ${({ $scrolled }) => 
    $scrolled 
      ? 'rgba(0, 0, 0, 0.9)' 
      : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)'
  };
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  transition: all 0.3s ease;
  
  @media screen and (max-width: 768px) and (orientation: landscape) {
    padding: 0.3rem 0;
    /* Add extra safe area for iOS devices */
    padding-top: env(safe-area-inset-top, 0.3rem);
  }
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
  
  @media screen and (max-width: 768px) and (orientation: landscape) {
    height: 35px;
  }
`;

const LogoText = styled.span`
  display: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.div)`
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1.1rem;
  position: relative;
  
  a {
    color: #FFFFFF;
    text-decoration: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--white);
    
    &:after {
      width: 100%;
    }
  }
`;

const MobileNavToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--white);
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
    z-index: 1001;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

const MobileNavLink = styled(motion.div)`
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1.1rem;
  position: relative;
  
  a {
    color: #FFFFFF;
    text-decoration: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--white);
    
    &:after {
      width: 100%;
    }
  }
`;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'About Us', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Contact Us', to: 'contact' }
  ];

  return (
    <NavbarContainer
      $scrolled={scrolled}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavbarContent>
        <Logo>
          <Link to="home" smooth={true} duration={500} offset={-100}>
            <LogoImage src={logoSvg} alt="A-Z Audiovisual Logo" />
          </Link>
        </Logo>
        
        <NavLinks>
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-20}
                spy={true}
                activeClass="active"
              >
                {item.name}
              </Link>
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileNavToggle onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileNavToggle>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <MobileNavLinks>
                {navItems.map((item, index) => (
                  <MobileNavLink
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-20}
                      spy={true}
                      activeClass="active"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  </MobileNavLink>
                ))}
              </MobileNavLinks>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
