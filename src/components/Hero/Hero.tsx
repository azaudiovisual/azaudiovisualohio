import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import WavyBackground from './WavyBackground';
import logoSvg from '../../assets/images/LOGO_AZAV (INV).svg';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 50px;
  
  @media screen and (max-width: 768px) and (orientation: landscape) {
    height: auto;
    min-height: 100vh;
    padding-top: 60px;
    padding-bottom: 20px;
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  margin-top: -80px;
  
  @media screen and (max-width: 768px) and (orientation: landscape) {
    margin-top: 10px;
    padding: 0.5rem;
  }
`;

const LargeLogo = styled.img`
  width: 350px;
  max-width: 80%;
  height: auto;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.3));
  
  @media screen and (max-width: 768px) and (orientation: landscape) {
    width: 180px;
    max-width: 50%;
    margin-bottom: 0.25rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #FFFFFF;
  text-align: center;
  font-family: 'Outfit', sans-serif;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media screen and (max-width: 768px) and (orientation: landscape) {
    font-size: 1.8rem;
    margin-bottom: 0.25rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
  text-align: center;
  white-space: nowrap;
  color: var(--white);
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media screen and (max-width: 768px) and (orientation: landscape) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
  }
  
  @media screen and (max-width: 768px) and (orientation: landscape) {
    flex-direction: row;
    margin-top: 0.25rem;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: transparent;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
  
  a {
    text-decoration: none;
    color: #FFFFFF;
  }
  
  @media screen and (max-width: 768px) and (orientation: landscape) {
    padding: 0.4rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: var(--white);
  border: 2px solid var(--blue);
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--blue);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <WavyBackground 
        colors={['#00A3FF', '#B500FF', '#FFFFFF', '#7B00FF', '#0077FF']} 
        waveWidth={50}
        backgroundFill="black"
        blur={10}
        speed="fast"
        waveOpacity={0.5}
      >
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <LargeLogo src={logoSvg} alt="A-Z Audiovisual Logo" />
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A-Z AUDIOVISUAL
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Making sure you're seen and heard
          </HeroSubtitle>
          <HeroButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="contact" smooth={true} duration={500} offset={-20}>
                Get Started
              </Link>
            </PrimaryButton>
          </HeroButtons>
        </HeroContent>
      </WavyBackground>
    </HeroSection>
  );
};

export default Hero;
