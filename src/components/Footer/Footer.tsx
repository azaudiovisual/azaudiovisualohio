import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import logoSvg from '../../assets/images/LOGO_AZAV (INV).svg';

const FooterContainer = styled.footer`
  background-color: #000;
  color: var(--white);
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 300px;
  
  @media (max-width: 768px) {
    align-items: center;
    margin: 0 auto 2rem;
  }
`;

const LogoImage = styled.img`
  height: 70px;
  width: auto;
  margin-bottom: 1rem;
`;

// Commented out unused styled component
// const LogoText = styled.span`
//   display: none;
// `;

const FooterDescription = styled.p`
  color: #aaa;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const FooterNavTitle = styled.h3`
  color: var(--white);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, var(--blue), var(--purple));
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLink = styled.div`
  margin-bottom: 0.8rem;
  color: #aaa;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: var(--blue);
  }
`;

const SocialMedia = styled.div`
  display: none;
`;

const SocialIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #aaa;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #222;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
          <Link to="home" smooth={true} duration={500} offset={-100}>
            <LogoImage src={logoSvg} alt="A-Z Audiovisual Logo" />
          </Link>
          <FooterDescription>
            Making sure you're seen and heard
          </FooterDescription>
          <SocialMedia>
            <SocialIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialIcon>
          </SocialMedia>
        </FooterLogo>
        
        <FooterNav>
          <FooterNavTitle>Navigate</FooterNavTitle>
          <Link to="about" smooth={true} duration={500} offset={-20}>
            <FooterLink>About Us</FooterLink>
          </Link>
          <Link to="services" smooth={true} duration={500} offset={-20}>
            <FooterLink>Services</FooterLink>
          </Link>
          <Link to="portfolio" smooth={true} duration={500} offset={-20}>
            <FooterLink>Portfolio</FooterLink>
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-20}>
            <FooterLink>Contact</FooterLink>
          </Link>
        </FooterNav>
        
        <FooterNav>
          <FooterNavTitle>Contact Us</FooterNavTitle>
          <FooterLink as="a" href="tel:+13304194411">(330)-419-4411</FooterLink>
          <FooterLink as="a" href="mailto:azaudiovisualohio@gmail.com">azaudiovisualohio@gmail.com</FooterLink>
          <FooterLink>Monday - Friday: 9 AM - 5 PM EST</FooterLink>
        </FooterNav>
      </FooterContent>
      
      <Copyright>
        &copy; {currentYear} A-Z Audiovisual. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
