import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

/**
 * EmailJS Debugger Utility
 * This utility helps troubleshoot EmailJS configuration and connection issues
 */

interface TestResult {
  success: boolean;
  message: string;
  details?: any;
}

/**
 * Initialize EmailJS with the provided public key
 */
export const initializeEmailJS = (): TestResult => {
  try {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    return {
      success: true,
      message: 'EmailJS initialized successfully',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to initialize EmailJS',
      details: error,
    };
  }
};

/**
 * Validate EmailJS configuration
 */
export const validateConfig = (): TestResult => {
  const errors = [];

  if (!EMAILJS_CONFIG.serviceId) {
    errors.push('Missing serviceId');
  } else if (!EMAILJS_CONFIG.serviceId.startsWith('service_')) {
    errors.push('Invalid serviceId format (should start with "service_")');
  }

  if (!EMAILJS_CONFIG.templateId) {
    errors.push('Missing templateId');
  } else if (!EMAILJS_CONFIG.templateId.startsWith('template_')) {
    errors.push('Invalid templateId format (should start with "template_")');
  }

  if (!EMAILJS_CONFIG.publicKey) {
    errors.push('Missing publicKey');
  }

  if (errors.length > 0) {
    return {
      success: false,
      message: 'EmailJS configuration validation failed',
      details: errors,
    };
  }

  return {
    success: true,
    message: 'EmailJS configuration validated successfully',
  };
};

/**
 * Send a test email to verify the configuration
 */
export const sendTestEmail = async (): Promise<TestResult> => {
  try {
    // Initialize first
    const initResult = initializeEmailJS();
    if (!initResult.success) {
      return initResult;
    }

    // Create test template params
    const templateParams = {
      name: 'Test User',
      organization: 'Debug Organization',
      email: 'test@example.com',
      phone: '555-555-5555',
      service: 'Testing Service',
      message: 'This is a test message sent from the EmailJS debugger utility.',
    };

    // Send test email - using same method as in Contact component
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('Debug email sent successfully!', response);

    return {
      success: true,
      message: 'Test email sent successfully',
      details: response,
    };
  } catch (error: any) {
    // Extract useful error information
    console.error('Debug email sending failed:', error);
    
    const errorDetails = {
      message: error.message || 'Unknown error',
      text: error.text || '',
      status: error.status || '',
      name: error.name || '',
    };

    return {
      success: false,
      message: 'Failed to send test email',
      details: errorDetails,
    };
  }
};

/**
 * Run a complete diagnostic test suite
 */
export const runDiagnostics = async (): Promise<TestResult[]> => {
  const results: TestResult[] = [];

  // Test 1: Validate configuration
  const configResult = validateConfig();
  results.push({
    ...configResult,
    message: 'Config Validation: ' + configResult.message,
  });

  // If config is invalid, don't proceed with other tests
  if (!configResult.success) {
    return results;
  }

  // Test 2: Initialize EmailJS
  const initResult = initializeEmailJS();
  results.push({
    ...initResult,
    message: 'Initialization: ' + initResult.message,
  });

  // If initialization failed, don't proceed with sending test
  if (!initResult.success) {
    return results;
  }

  // Test 3: Send test email
  const sendResult = await sendTestEmail();
  results.push({
    ...sendResult,
    message: 'Test Email: ' + sendResult.message,
  });

  return results;
};
