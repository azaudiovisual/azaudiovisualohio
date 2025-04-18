import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

const ContactSection = styled.section`
  position: relative;
  background-color: #050505;
  overflow: hidden;
`;

const BackgroundElement = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 163, 255, 0.1) 0%, rgba(181, 0, 255, 0) 70%);
  filter: blur(30px);
`;

const TopLeftElement = styled(BackgroundElement)`
  top: -100px;
  left: -100px;
`;

const BottomRightElement = styled(BackgroundElement)`
  bottom: -100px;
  right: -100px;
  background: radial-gradient(circle, rgba(181, 0, 255, 0.1) 0%, rgba(0, 163, 255, 0) 70%);
`;

const ContactContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const ContactHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--white);
`;

const ContactText = styled.p`
  margin-bottom: 2rem;
  line-height: 1.8;
  color: var(--white);
  opacity: 0.9;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ContactInfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  color: var(--white);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ContactInfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfoLabel = styled.span`
  font-size: 0.9rem;
  color: var(--light-gray);
`;

const ContactInfoValue = styled.span`
  color: var(--white);
  font-weight: bold;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--white);
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: var(--white);
  font-family: 'Space Mono', monospace;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--blue);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: var(--white);
  font-family: 'Space Mono', monospace;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--blue);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: var(--white);
  font-family: 'Space Mono', monospace;
  appearance: none;
  
  option {
    background: #0a0a0a;
  }
  
  &:focus {
    outline: none;
    border-color: var(--blue);
  }
`;

const SubmitButton = styled(motion.button)`
  background: transparent;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 30px;
  margin-top: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(0, 163, 255, 0.1);
  border: 1px solid var(--blue);
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  color: var(--white);
  text-align: center;
  font-weight: bold;
`;

const ErrorMessage = styled(motion.div)`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff3333;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  color: var(--white);
  text-align: center;
  font-weight: bold;
`;

const ValidationError = styled.span`
  color: #ff3333;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: block;
`;

const Loader = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // Initialize EmailJS when component mounts
  useEffect(() => {
    // Initialize EmailJS with your public key (format: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX)
    emailjs.init(EMAILJS_CONFIG.publicKey);
    
    // Log confirmation that EmailJS is initialized
    console.log('EmailJS initialized with public key');
  }, []);
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.service) {
      errors.service = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error for this field when the user edits it
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // For development/testing without actual EmailJS credentials
      const isDevelopmentMode = process.env.NODE_ENV === 'development' && 
        (EMAILJS_CONFIG.serviceId.includes('xxxxxxx') || 
         EMAILJS_CONFIG.templateId.includes('xxxxxxx') || 
         EMAILJS_CONFIG.publicKey.includes('xxxxxxx'));
      
      if (isDevelopmentMode) {
        console.log('Development mode: Simulating email submission');
        console.log('Form data:', formData);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setFormSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          organization: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset form submitted state after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        // Production mode with actual EmailJS integration
        // Changed: Using direct send method instead of sendForm (which requires a ref)
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            // Ensure template parameter names match exactly
            name: formData.name,
            organization: formData.organization || "Not provided",
            email: formData.email,
            phone: formData.phone || "Not provided",
            service: formData.service,
            message: formData.message
          },
          EMAILJS_CONFIG.publicKey
        );
        
        console.log('Email sent successfully!');
        
        setFormSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          organization: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset form submitted state after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <ContactSection id="contact">
      <TopLeftElement />
      <BottomRightElement />
      
      <ContactContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </SectionTitle>
        
        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactHeading>Get In Touch</ContactHeading>
            <ContactText>
              Fill out the form to get in touch with us. We can't wait to help bring your vision to life!
            </ContactText>
            
            <ContactInfoItem>
              <ContactInfoIcon>
                <svg viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
                  <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a1 1 0 00-.086-1.391l-4.064-3.696z" />
                </svg>
              </ContactInfoIcon>
              <ContactInfoText>
                <ContactInfoLabel>Phone</ContactInfoLabel>
                <ContactInfoValue>(330)-419-4411</ContactInfoValue>
              </ContactInfoText>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactInfoIcon>
                <svg viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 001.228 0L20 9.044 20.002 18H4z" />
                </svg>
              </ContactInfoIcon>
              <ContactInfoText>
                <ContactInfoLabel>Email</ContactInfoLabel>
                <ContactInfoValue>azaudiovisualohio@gmail.com</ContactInfoValue>
              </ContactInfoText>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactInfoIcon>
                <svg viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                  <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
                </svg>
              </ContactInfoIcon>
              <ContactInfoText>
                <ContactInfoLabel>Hours</ContactInfoLabel>
                <ContactInfoValue>Monday - Friday: 9 AM - 5 PM EST</ContactInfoValue>
              </ContactInfoText>
            </ContactInfoItem>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              {formErrors.name && <ValidationError>{formErrors.name}</ValidationError>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="organization">Organization</FormLabel>
              <FormInput 
                type="text" 
                id="organization" 
                name="organization" 
                value={formData.organization}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
              {formErrors.email && <ValidationError>{formErrors.email}</ValidationError>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="phone">Phone Number</FormLabel>
              <FormInput 
                type="tel" 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="service">Services Desired</FormLabel>
              <FormSelect 
                id="service" 
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Live Event Production">Live Event Production</option>
                <option value="Event Planning & Coordination">Event Planning & Coordination</option>
                <option value="Consulting & Integration">Consulting & Integration</option>
                <option value="Audio Engineering">Audio Engineering</option>
                <option value="Video Production">Video Production</option>
                <option value="Lighting Design">Lighting Design</option>
                <option value="Other">Other (please specify in message)</option>
              </FormSelect>
              {formErrors.service && <ValidationError>{formErrors.service}</ValidationError>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <FormTextarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required 
              />
              {formErrors.message && <ValidationError>{formErrors.message}</ValidationError>}
            </FormGroup>
            
            <SubmitButton 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {isSubmitting && <Loader />}
            </SubmitButton>
            
            {formSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </SuccessMessage>
            )}
            
            {submitError && (
              <ErrorMessage
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {submitError}
              </ErrorMessage>
            )}
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
