import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Image imports for portfolio
import img2434 from '../../assets/images/portfolio/IMG_2434.jpg';
import img2563 from '../../assets/images/portfolio/IMG_2563.jpg';
import img2946 from '../../assets/images/portfolio/IMG_2946.jpg';
import img2955 from '../../assets/images/portfolio/IMG_2955.jpg';
import img2957 from '../../assets/images/portfolio/IMG_2957.jpg';
import img3006 from '../../assets/images/portfolio/IMG_3006.jpg';
import img3020 from '../../assets/images/portfolio/IMG_3020.jpg';
import img3037 from '../../assets/images/portfolio/IMG_3037.jpg';
import img3038 from '../../assets/images/portfolio/IMG_3038.jpg';
import img3039 from '../../assets/images/portfolio/IMG_3039.jpg';
import img3115 from '../../assets/images/portfolio/IMG_3115.jpg';
import img3319 from '../../assets/images/portfolio/IMG_3319.jpg';

const PortfolioSection = styled.section`
  position: relative;
  background-color: #000000;
  overflow: hidden;
`;

// Gradient overlay removed as requested

const PortfolioContainer = styled.div`
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

const SectionSubtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--light-gray);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const GridItem = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    height: 280px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0) 100%);
  color: white;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--white);
`;

const ProjectType = styled.p`
  color: var(--blue);
  margin-bottom: 0;
  font-weight: bold;
`;

// Portfolio items data with the specified order
const portfolioItems = [
  {
    id: 1,
    image: img3319,
    title: "Broadcast & Monitors | Christmas Groove 2024",
    type: "Audio Engineering"
  },
  {
    id: 2,
    image: img3115,
    title: "Front of House | Malone Big Day Fest 2024",
    type: "Audio Engineering"
  },
  {
    id: 3,
    image: img2434,
    title: "Monitors | Christmas Groove 2023",
    type: "Audio Engineering"
  },
  {
    id: 4,
    image: img2563,
    title: "New Sound System | Lifesong Fellowship Church",
    type: "Consulting & Integration"
  },
  {
    id: 5,
    image: img2946,
    title: "Backstage View | Beach Boys",
    type: "Live Event Production"
  },
  {
    id: 6,
    image: img2955,
    title: "Line Arrays | Beach Boys",
    type: "Live Event Production"
  },
  {
    id: 7,
    image: img2957,
    title: "Console Tech | Beach Boys",
    type: "Live Event Production"
  },
  {
    id: 8,
    image: img3006,
    title: "Stagehand | Reclaim Worship Night 2024",
    type: "Live Event Production"
  },
  {
    id: 9,
    image: img3020,
    title: "L-Acoustics K2 | Alive Fest 2024",
    type: "Live Event Production"
  },
  {
    id: 10,
    image: img3037,
    title: "Front of House View | Alive Fest 2024",
    type: "Live Event Production"
  },
  {
    id: 11,
    image: img3038,
    title: "Monitor World | Alive Fest 2024",
    type: "Live Event Production"
  },
  {
    id: 12,
    image: img3039,
    title: "Skillet Amps | Alive Fest 2024",
    type: "Live Event Production"
  }
];

const Portfolio: React.FC = () => {
  return (
    <PortfolioSection id="portfolio">
      <PortfolioContainer>
        <SectionTitle>Portfolio</SectionTitle>
        <SectionSubtitle>Check out some of our past work!</SectionSubtitle>
        
        <ProjectGrid>
          {portfolioItems.map((item, index) => (
            <GridItem
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage src={item.image} alt={item.title} />
              <ProjectOverlay>
                <ProjectTitle>{item.title}</ProjectTitle>
                <ProjectType>{item.type}</ProjectType>
              </ProjectOverlay>
            </GridItem>
          ))}
        </ProjectGrid>
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
