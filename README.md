# A-Z Audiovisual Website

A modern, responsive website for A-Z Audiovisual, showcasing their professional audiovisual services.

![A-Z Audiovisual](./src/assets/LOGO_AZAV.png)

## Features

- **Modern Design**: Clean, professional look with dynamic animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth scrolling and animated components
- **Service Showcase**: Detailed display of audiovisual services offered
- **Portfolio Gallery**: Visual showcase of past work and projects
- **Contact Form**: Fully functional contact form with EmailJS integration

## Technology Stack

- **React** with **TypeScript**
- **Styled Components** for styling
- **Framer Motion** (v6.5.1) for animations
- **React Scroll** for smooth scrolling navigation
- **Simplex Noise** for wavy background animations
- **EmailJS** for contact form functionality

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/a-z-audiovisual.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure EmailJS
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Set up your email service and template
   - Update the configuration in `src/config/emailjs.ts`

4. Start the development server
   ```bash
   npm start
   ```

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

The site can be deployed to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## Project Structure

```
a-z-audiovisual/
├── public/              # Public assets
├── src/                 # Source code
│   ├── assets/          # Images and static assets
│   ├── components/      # React components
│   │   ├── About/       # About section
│   │   ├── Contact/     # Contact form section
│   │   ├── Footer/      # Footer section
│   │   ├── Hero/        # Hero/landing section
│   │   ├── Navbar/      # Navigation bar
│   │   ├── Portfolio/   # Portfolio gallery
│   │   └── Services/    # Services section
│   ├── config/          # Configuration files
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   └── index.tsx        # Entry point
└── package.json         # Project dependencies
```

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact

A-Z Audiovisual - [azaudiovisualohio@gmail.com](mailto:azaudiovisualohio@gmail.com)

Website: [https://www.yourwebsite.com](https://www.yourwebsite.com)
