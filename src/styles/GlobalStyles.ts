import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #00A3FF;
    --purple: #B500FF;
    --white: #FFFFFF;
    --black: #000000;
    --gray: #333333;
    --light-gray: #666666;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Space Mono', monospace; /* Using Space Mono as a substitute for Geist Mono */
    background-color: var(--black);
    color: var(--white);
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    background: linear-gradient(45deg, var(--blue), var(--purple));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--white);
    position: relative;
    display: inline-block;
    margin-bottom: 3rem;
  }

  h2::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 60%;
    height: 4px;
    background: linear-gradient(90deg, var(--blue), var(--purple));
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  a {
    color: var(--blue);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--purple);
  }

  button {
    font-family: 'Space Mono', monospace;
    background: linear-gradient(45deg, var(--blue), var(--purple));
    color: var(--white);
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-weight: 700;
  }

  button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  section {
    padding: 5rem 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    section {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyles;
