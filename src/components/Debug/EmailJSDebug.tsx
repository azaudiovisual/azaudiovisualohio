import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  validateConfig,
  initializeEmailJS,
  sendTestEmail,
  runDiagnostics 
} from '../../utils/emailjsDebugger';
import { EMAILJS_CONFIG } from '../../config/emailjs';

const DebugContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Courier New', monospace;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 1rem;
  color: #333;
`;

const ConfigDisplay = styled.div`
  background-color: #000;
  color: #00ff00;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0055aa;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ResultContainer = styled.div`
  margin-top: 1rem;
`;

const ResultItem = styled.div<{ success: boolean }>`
  background-color: ${props => props.success ? '#e6ffe6' : '#ffe6e6'};
  border-left: 4px solid ${props => props.success ? '#00cc00' : '#cc0000'};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
`;

const ResultTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ResultDetails = styled.pre`
  background-color: #f8f8f8;
  padding: 0.5rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 12px;
  white-space: pre-wrap;
`;

interface TestResult {
  success: boolean;
  message: string;
  details?: any;
}

const EmailJSDebug: React.FC = () => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  const handleValidateConfig = () => {
    const result = validateConfig();
    setResults([result]);
  };
  
  const handleInitializeEmailJS = () => {
    const result = initializeEmailJS();
    setResults([result]);
  };
  
  const handleSendTestEmail = async () => {
    setLoading(true);
    try {
      const result = await sendTestEmail();
      setResults([result]);
    } finally {
      setLoading(false);
    }
  };
  
  const handleRunDiagnostics = async () => {
    setLoading(true);
    try {
      const results = await runDiagnostics();
      setResults(results);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <DebugContainer>
      <Title>EmailJS Debug Utility</Title>
      
      <h2>Current Configuration</h2>
      <ConfigDisplay>
        <pre>
{`serviceId: "${EMAILJS_CONFIG.serviceId}"
templateId: "${EMAILJS_CONFIG.templateId}"
publicKey: "${EMAILJS_CONFIG.publicKey.substring(0, 5)}${'*'.repeat(Math.max(0, EMAILJS_CONFIG.publicKey.length - 10))}${EMAILJS_CONFIG.publicKey.slice(-5)}"`}
        </pre>
      </ConfigDisplay>
      
      <ButtonGroup>
        <Button onClick={handleValidateConfig}>
          Validate Config
        </Button>
        <Button onClick={handleInitializeEmailJS}>
          Test Initialization
        </Button>
        <Button onClick={handleSendTestEmail} disabled={loading}>
          {loading ? 'Sending...' : 'Send Test Email'}
        </Button>
        <Button onClick={handleRunDiagnostics} disabled={loading}>
          {loading ? 'Running...' : 'Run All Diagnostics'}
        </Button>
      </ButtonGroup>
      
      <h2>Test Results</h2>
      <ResultContainer>
        {results.length === 0 ? (
          <p>No tests run yet. Click a button above to begin testing.</p>
        ) : (
          results.map((result, index) => (
            <ResultItem key={index} success={result.success}>
              <ResultTitle>
                {result.success ? '✅ Success' : '❌ Error'}: {result.message}
              </ResultTitle>
              {result.details && (
                <ResultDetails>
                  {typeof result.details === 'string' 
                    ? result.details 
                    : JSON.stringify(result.details, null, 2)}
                </ResultDetails>
              )}
            </ResultItem>
          ))
        )}
      </ResultContainer>
    </DebugContainer>
  );
};

export default EmailJSDebug;
