import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  position: relative;
  background-color: #050505;
  overflow: hidden;
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: -300px;
  right: -300px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 163, 255, 0.05) 0%, rgba(181, 0, 255, 0.05) 100%);
  z-index: 0;
`;

const BackgroundShape2 = styled.div`
  position: absolute;
  bottom: -200px;
  left: -200px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(181, 0, 255, 0.05) 0%, rgba(0, 163, 255, 0.05) 100%);
  z-index: 0;
`;

const ServicesContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  position: relative;
  z-index: 1;
  
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0, 163, 255, 0.05), rgba(181, 0, 255, 0.05));
    z-index: -1;
    transition: opacity 0.3s ease;
    opacity: 0;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  color: var(--white);
  transition: all 0.3s ease;
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--white);
`;

const ServiceDescription = styled.p`
  color: var(--white);
  opacity: 0.8;
  margin: 0;
  line-height: 1.6;
`;

const ServiceFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
`;

const ServiceFeatureItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '✓';
    color: var(--blue);
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const QuoteButton = styled(motion.button)`
  background: transparent;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 30px;
  margin-top: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  align-self: center;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
`;

const Services: React.FC = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      ),
      title: "Live Event Production",
      description: "Comprehensive audio, video, lighting, and livestreaming solutions for events of any size.",
      features: [
        "Professional audio systems and mixing",
        "Dynamic lighting design and programming",
        "High-definition video and LED displays",
        "Live event broadcasting and streaming"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      title: "Event Planning & Coordination",
      description: "End-to-end planning and technical coordination services for seamless event execution.",
      features: [
        "Venue analysis and selection",
        "Technical coordination",
        "Timeline development",
        "On-site logistics"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      title: "Consulting & Integration",
      description: "Expert consultation and system integration services for permanent AV installations.",
      features: [
        "Needs assessment and system design",
        "Equipment specification",
        "Installation oversight",
        "Staff training",
        "Automation",
        "Ongoing technical support"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      ),
      title: "Audio Engineering",
      description: "Professional audio engineering services for live events, studio recordings, and broadcasts with precision and clarity.",
      features: [
        "Front of House (FOH) mixing",
        "Monitor engineering",
        "RF coordination",
        "Multitrack recording",
        "Mixing & mastering"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333V7zm-1.998 10H4V7h12l.001 10z" />
        </svg>
      ),
      title: "Video Production",
      description: "High-definition video solutions for presentations, performances, and live streaming.",
      features: [
        "LED video walls",
        "Projection mapping",
        "Multi-camera systems",
        "Live switching"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
        </svg>
      ),
      title: "Lighting Design",
      description: "Creative lighting solutions that enhance atmosphere and create unforgettable visual experiences.",
      features: [
        "Moving head fixtures",
        "LED wash lighting",
        "Atmospheric effects",
        "Stage and architectural lighting"
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: custom * 0.1
      }
    })
  };
  
  return (
    <ServicesSection id="services">
      <BackgroundShape />
      <BackgroundShape2 />
      
      <ServicesContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </SectionTitle>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              
              <ServiceFeatureList>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeatureItem key={featureIndex}>
                    {feature}
                  </ServiceFeatureItem>
                ))}
              </ServiceFeatureList>
            </ServiceCard>
          ))}
        </ServicesGrid>
        
        <QuoteButton
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Get Started
        </QuoteButton>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
