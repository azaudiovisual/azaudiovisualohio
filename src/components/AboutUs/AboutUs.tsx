import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

// Import images for the About section
import aboutImage from '../../assets/images/portfolio/IMG_3316.jpg';
import lightingImage from '../../assets/images/portfolio/IMG_2434.jpg';
import visualImage from '../../assets/images/portfolio/IMG_2563.jpg';

const AboutSection = styled.section`
  position: relative;
  background-color: rgba(0, 0, 0, 0.9);
`;

const AboutContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  
  &::after {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;
`;

const AboutParagraph = styled(motion.p)`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 100%;
  overflow-wrap: break-word;
`;

const HighlightText = styled(motion.span)`
  color: var(--blue);
  font-weight: bold;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(0, 163, 255, 0.05);
    box-shadow: 0 0 15px rgba(0, 163, 255, 0.2), 0 0 30px rgba(181, 0, 255, 0.1);
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const StatNumber = styled.h3`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: var(--blue);
  text-shadow: 0 0 10px rgba(0, 163, 255, 0.4);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2.2rem;
    margin-bottom: 0.3rem;
  }
`;

const StatTitle = styled.p`
  color: var(--purple);
  margin: 0;
  font-weight: bold;
  text-shadow: 0 0 8px rgba(181, 0, 255, 0.4);
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const AboutImageContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  z-index: 1;
`;

const ImageContainer = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4/3;
  background-color: #1a1a1a;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    aspect-ratio: 3/2;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

// Counter component with animation
interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  formatter?: (value: number) => string;
}

const CountUp: React.FC<CountUpProps> = ({ 
  end, 
  suffix = '', 
  duration = 2, 
  formatter = (value) => value.toString()
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const decimals = 0;
  
  useEffect(() => {
    let startTimestamp: number;
    let animationFrameId: number;
    
    if (isInView) {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Calculate the current count value based on progress
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);
        
        // Continue animation until we reach the end value
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      
      animationFrameId = requestAnimationFrame(step);
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, end, duration]);
  
  return <span ref={ref}>{isInView ? formatter(count) + suffix : "0" + suffix}</span>;
};

const AboutUs: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </SectionTitle>
        
        <AboutContent>
          <AboutText
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AboutParagraph variants={fadeInUp}>
              <HighlightText>At A-Z Audiovisual</HighlightText>, our mission is to make sure you're seen and heard! We specialize in creating immersive spaces and memorable experiences that bring your vision to life. From live event production to consulting and integration, we've got you covered from A to Z!
            </AboutParagraph>
            
            <AboutParagraph variants={fadeInUp}>
              We love technology! This being said, we also know technology can be a roadblock. That's where we come in. We believe technology should work FOR you, not against you! We're here to demystify the mysteries of technology and make it approachable. We're passionate about the latest advancements in audiovisual technology and how they can be used to push the boundaries of creativity.
            </AboutParagraph>
            
            <AboutParagraph variants={fadeInUp}>
              Whether you're planning a live event, an integration, your system needs a tune-up, or just need a professional opinion, we've got you covered from A to Z. Let's bring your vision to life together!
            </AboutParagraph>
            
            <StatsContainer>
              <StatItem
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <StatNumber><CountUp end={10} suffix="+" /></StatNumber>
                <StatTitle>Years of Experience</StatTitle>
              </StatItem>
              
              <StatItem
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <StatNumber><CountUp end={400} suffix="+" /></StatNumber>
                <StatTitle>Successful Events</StatTitle>
              </StatItem>
              
              <StatItem
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <StatNumber><CountUp end={150000} suffix="+" formatter={(value) => value.toLocaleString()} /></StatNumber>
                <StatTitle>Feet of Cable Wrapped</StatTitle>
              </StatItem>
              
              <StatItem
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <StatNumber><CountUp end={100} suffix="%" /></StatNumber>
                <StatTitle>Good Vibes</StatTitle>
              </StatItem>
            </StatsContainer>
          </AboutText>
          
          <AboutImageContainer>
            <ImageContainer
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AboutImage src={aboutImage} alt="Audio Equipment Setup" />
            </ImageContainer>
          </AboutImageContainer>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default AboutUs;
