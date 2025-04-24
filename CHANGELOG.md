# A-Z Audiovisual Website Changelog

All notable changes to the A-Z Audiovisual website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2025-04-23

### Changed
- Modified the About Us section:
  - Removed the sentence "From live event production to consulting and integration, we've got you covered from A to Z!" for more concise messaging
  - Changed the numbers in counting elements to white color for better visibility
  - Changed "Years of Experience" and "Feet of Cable Wrapped" text to blue
  - Kept "Successful Events" and "Good Vibes" text in the original purple color
- Modified the Contact section:
  - Removed the "Get In Touch" heading for a cleaner look
  - Simplified the Contact form service options by removing:
    - Audio Engineering
    - Video Production
    - Lighting Design
- Improved section backgrounds for a cleaner, more consistent look:
  - Removed all decorative background elements (circles and gradients) from Services, Portfolio, and Contact sections
  - Changed all section backgrounds to pure black for better consistency
- Enhanced the Services section:
  - Changed section heading from "Our Services" to "Services & Skills"
  - Updated Live Event Production description to "Professional technical services for live events of any size"
  - Added detailed list of roles in Live Event Production: FOH & Monitor Engineering, Lighting Direction, Camera Operation & Video Direction, RF Coordination & Deployment, Livestreaming & Recording, IT & Networking, and Playback
  - Reordered service cards to place Consulting & Integration before Event Planning & Coordination
  - Removed Audio Engineering, Video Production, and Lighting Design sections to focus on core services

## [1.0.0] - 2025-04-17

### Added
- Deployed website to GitHub and Netlify
- Created GitHub repository at https://github.com/azaudiovisual/azaudiovisualohio.git
- Set up Netlify deployment from GitHub repository
- Added .env.production file with CI=false to prevent ESLint warnings from causing build failures

### Fixed
- Resolved ESLint warnings that were causing build failures in CI environment:
  - Fixed React hooks dependency issue in WavyBackground.tsx by wrapping getSpeed function in useCallback
  - Removed unused variables and imports in AboutUs.tsx
  - Commented out unused styled components in Footer.tsx, Navbar.tsx, and Hero.tsx

## [0.7.7] - 2025-03-28

### Added
- Integrated actual project photos throughout the website:
  - Added client photos to the Portfolio section with proper captions and descriptions
  - Replaced text placeholder in the About Us section with an actual image
  - Created improved image display with hover effects in both sections

### Changed
- Enhanced the Portfolio component:
  - Updated the project cards with more engaging hover effects
  - Improved mobile responsiveness for image displays
  - Added detailed captions for each portfolio image
  - Expanded the portfolio with additional project categories
- Streamlined About Us section:
  - Simplified to a single large image display instead of multiple small boxes
  - Set aspect ratio to properly display the full image
  - Removed unnecessary placeholder boxes for a cleaner look
  - Added subtle zoom effect on image hover

## [0.7.6] - 2025-03-21

### Fixed
- Further improvements to mobile landscape mode display:
  - More aggressive reduction of navbar padding and logo size
  - Added iOS safe area handling with viewport-fit=cover
  - Positioned logo lower in landscape mode
  - Significantly reduced the gap between logo and text in Hero section
  - Made text and buttons smaller in landscape mode
  - Adjusted all element spacing for better vertical fit

## [0.7.5] - 2025-03-21

### Fixed
- Improved mobile landscape mode display:
  - Fixed issues with logo being cut off at the top of the page
  - Reduced logo size and adjusted spacing in Navbar
  - Optimized Hero section layout with proper content spacing
  - Adjusted button sizing and positioning for better usability
  - Ensured all content is visible without requiring scroll on initial load

## [0.7.4] - 2025-03-21

### Fixed
- Improved mobile responsiveness in the About Us section:
  - Fixed issue where statistic boxes were being covered by image containers
  - Implemented single column layout for statistics on small screens
  - Added proper z-index to ensure correct element stacking
  - Adjusted font sizes and spacing for better readability on mobile
  - Reduced minimum height of image containers on smaller screens

## [0.7.3] - 2025-03-21

### Changed
- Reordered services in the Services section to the following sequence:
  1. Live Event Production
  2. Event Planning & Coordination
  3. Consulting and Integration
  4. Audio Engineering
  5. Video Production
  6. Lighting Design

## [0.7.2] - 2025-03-21

### Fixed
- Updated contact information in the footer to match the Contact section:
  - Updated email to azaudiovisualohio@gmail.com
  - Updated phone number to (330)-419-4411
  - Updated business hours to Monday - Friday: 9 AM - 5 PM EST

## [0.7.1] - 2025-03-21

### Enhanced
- Added subtle glow effects to statistics in the About Us section:
  - Blue text-shadow glow for the statistic numbers
  - Purple text-shadow glow for the statistic titles
  - Dual-color box-shadow glow effect (blue and purple) on hover for the stat boxes
  - Adjusted background hover color for a more subtle effect

## [0.7.0] - 2025-03-21

### Added
- Implemented animated count-up effect for statistics in the About Us section:
  - Numbers now animate from 0 to their final value when scrolled into view
  - Created a reusable CountUp component using framer-motion's useInView hook
  - Animation enhances user engagement and draws attention to key metrics

## [0.6.7] - 2025-03-21

### Changed
- Refined the color scheme of the About Us statistics:
  - Changed statistic numbers (10+, 400+, etc.) to blue (var(--blue))
  - Changed statistic titles ("Years of Experience", etc.) to purple (var(--purple))
  - This creates a more balanced color distribution using both brand colors

## [0.6.6] - 2025-03-21

### Changed
- Updated the styling of statistic numbers in the About Us section from a blue-purple gradient to solid purple for better visual emphasis and brand consistency

## [0.6.5] - 2025-03-21

### Changed
- Updated the fourth statistic in the About Us section from "100% Client Satisfaction" to "100% Good Vibes" to reflect a more approachable and positive company culture

## [0.6.4] - 2025-03-21

### Changed
- Updated the third statistic in the About Us section from "50+ Corporate Clients" to "150,000+ Feet of Cable Wrapped" to better showcase technical expertise and project scale

## [0.6.3] - 2025-03-21

### Changed
- Streamlined the About Us content to a more concise three-paragraph format:
  - Enhanced the first paragraph with additional services mention
  - Revised the technology paragraph with a more enthusiastic and accessible tone
  - Combined key points into a more focused and impactful message

## [0.6.2] - 2025-03-21

### Changed
- Updated "Successful Events" statistic from 500+ to 400+ in the About Us section

## [0.6.1] - 2025-03-21

### Fixed
- Improved layout of About Us section to ensure all text is visible:
  - Adjusted grid layout to give text section more space (2fr:1fr ratio)
  - Enhanced text styling with proper overflow handling
  - Made stats container more compact to preserve vertical space for text content
  - Aligned content to the top for better readability

## [0.6.0] - 2025-03-21

### Changed
- Updated the About Us section with new, more conversational content focusing on:
  - The company mission to make sure clients are "seen and heard"
  - Approach to technology as a creative tool rather than a challenge
  - Commitment to innovation and cutting-edge solutions
  - Experience and approach to handling pressure during live events
  - Comprehensive service coverage "from A to Z"

## [0.5.0] - 2025-03-21

### Changed
- Renamed "Audio Solutions" service to "Audio Engineering" with a more professional operational focus
- Updated service description to emphasize live events, studio recordings, and broadcasts
- Updated feature list to include professional audio services: Front of House mixing, Monitor engineering, RF coordination, Multitrack recording, and Mixing & mastering

## [0.4.2] - 2025-03-21

### Changed
- Modified text format of "Other" option in services dropdown to "Other...(please specify below)"

## [0.4.1] - 2025-03-21

### Changed
- Updated the contact form's service dropdown field:
  - Renamed label from "Service Interested In" to "Services Desired"
  - Simplified options to "Live Event Planning & Production", "Consulting & Integration", and "Other (Please specify below)"
  - Aligned service options with the company's core offerings

## [0.4.0] - 2025-03-21

### Changed
- Updated Contact section with accurate business information:
  - Phone number: (330)-419-4411
  - Email: azaudiovisualohio@gmail.com
  - Business hours: Monday - Friday: 9 AM - 5 PM EST

## [0.3.9] - 2025-03-21

### Changed
- Replaced Audio Solutions icon with a clean, standard speaker icon for better clarity and recognition

## [0.3.8] - 2025-03-21

### Changed
- Updated Audio Solutions icon with a proper speaker with soundwaves SVG
- Improved Event Planning & Coordination icon with a better clipboard design
- Fixed service order to maintain consistent presentation

## [0.3.7] - 2025-03-21

### Changed
- Improved SVG icons for Live Event Production, Audio Solutions, and Consulting & Integration services
- Replaced SVG paths with more detailed and professional icon representations from standard icon libraries

## [0.3.6] - 2025-03-21

### Changed
- Replaced emoji icons in Services section with white SVG icons
- Updated the ServiceIcon component styling to match ContactInfoIcon style (white, circular with border)
- Improved visual consistency across all sections with standardized icon styling

## [0.3.5] - 2025-03-21

### Changed
- Updated Services section with focused content on core business offerings
- Added "Live Event Production" and "Event Planning & Coordination" as primary services
- Replaced "Technical Direction" with more specific "Consulting & Integration" service
- Removed "Equipment Rental" and "Virtual Events" services
- Enhanced service descriptions and feature lists to better reflect company capabilities

## [0.3.4] - 2025-03-22

### Changed
- Updated all Contact section informational icons (phone, email, hours) to match the white and bordered style
- Increased size of contact information icons to 50px for better visibility
- Added hover effects to contact information icons for improved interactivity

## [0.3.3] - 2025-03-22

### Changed
- Updated Contact form's Submit button to match the Hero button style
- Enlarged social media icons in the Footer and made them all white with white borders
- Added LinkedIn icon to social media sections
- Updated Contact section's social media icons to match the Footer style
- Improved consistency across all interactive elements

## [0.3.2] - 2025-03-22

### Changed
- Standardized button styling across all sections to match the Hero "Get Started" button design
- Replaced purple hover effects with subtle white glows on all buttons for a cleaner look
- Changed navigation link underlines from gradient to white for consistency
- Improved overall UI cohesiveness with consistent button and interaction styles

## [0.3.1] - 2025-03-22

### Changed
- Updated footer content with company tagline "Making sure you're seen and heard"
- Removed Services section from the footer to streamline navigation
- Enhanced social media icons with gradient fills and white borders
- Changed Contact form "Full Name" field to "Your Name"
- Added new "Organization" field to Contact form between name and email
- Made "Your Name" and "Email Address" required fields in Contact form
- Removed Address section from Contact information
- Replaced icons with modern SVG versions featuring white borders and gradient fills
- Added white highlights to gradients throughout the site for a more vibrant look

## [0.3.0] - 2025-03-21

### Changed
- Refined section navigation positioning to improve scrolling behavior
- Reduced scroll offset to display section headings lower on the page
- Normalized padding across all sections for better content flow

## [0.2.9] - 2025-03-21

### Changed
- Improved navigation scrolling behavior with updated offsets
- Adjusted section title positioning to appear higher on the page when navigating
- Increased top padding in all main sections (About, Services, Portfolio, Contact)

## [0.2.8] - 2025-03-21

### Changed
- Redesigned the "Get Started" button with a transparent background, white text and border
- Added a subtle glow effect to the button using brand colors
- Improved button hover and tap animations for better interactivity

## [0.2.7] - 2025-03-21

### Changed
- Shifted Hero section content (logo, title, and subtext) higher up on the page

## [0.2.6] - 2025-03-21

### Fixed
- Fixed navigation text color to properly display as pure white (#FFFFFF)

## [0.2.5] - 2025-03-21

### Changed
- Centered all text and buttons in the Hero section
- Removed "Our Services" button from Hero section
- Changed "Get a Quote" button text to "Get Started"
- Updated navigation text color to pure white (#FFFFFF) for better visibility

## [0.2.4] - 2025-03-21

### Changed
- Updated Hero title to all caps ("A-Z AUDIOVISUAL") and ensured it appears on one line
- Ensured hero subtitle appears on one line
- Reduced the intensity of the logo glow effect in the Hero section
- Increased logo size in both Navbar (60px height) and Footer (70px height)
- Applied footer text color (#aaa) to navigation links in the Navbar for consistent styling

## [0.2.3] - 2025-03-20

### Changed
- Removed text from Navbar and Footer, keeping only the logo
- Updated Hero section title to "A-Z Audiovisual" in white
- Changed Hero tagline to "Making sure you're seen and heard"
- Changed the logo glow effect to white for improved visibility

## [0.2.2] - 2025-03-20

### Added
- Added company logo in Navbar, Hero section, and Footer
- Created a new Footer component with contact information and navigation links
- Added SVG favicon based on company logo

## [0.2.1] - 2025-03-20

### Changed
- Added pure white (#FFFFFF) as one of the wave colors in the Hero background for increased visual contrast

## [0.2.0] - 2025-03-20

### Changed
- Replaced the particle animation in the Hero component with a more visually appealing wavy background animation
- Added simplex-noise dependency for creating organic wave patterns
- Improved animation performance with optimized canvas rendering
- Enhanced visual aesthetics with fluid wave animations in brand colors

## [0.1.0] - 2025-03-20

### Added
- Initial project setup with Create React App and TypeScript
- Project structure with component-based architecture
- Navigation bar with smooth scrolling functionality
- Hero section with animated particle background
- About Us section with company information and statistics
- Services section detailing audiovisual offerings
- Portfolio section with filterable project display
- Contact section with form and information
- Responsive design for all screen sizes
- Dark theme with brand colors (blue, purple, white, black)
- Custom hooks for scroll animations
- Styled components for consistent styling

### Fixed
- TypeScript null reference errors in the Hero component's canvas animation
- Non-boolean attribute warnings for styled-components by using transient props ($scrolled, $active)
- Missing module declarations for React, framer-motion and other libraries
- Implicit 'any' type warning for event parameters

### Changed
- Updated tsconfig.json with proper module resolution settings
- Installed stable version of framer-motion (v6.5.1) to resolve compatibility issues
- Implemented proper TypeScript interfaces for styled-component props

### Technical Details
- Utilized React hooks for state management and effects
- Implemented canvas-based particle animations for visual appeal
- Created custom TypeScript declarations for components
- Set up proper module paths for better code organization
