import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const EmailJSTest = () => {
  const [isTesting, setIsTesting] = useState(false);
  const { toast } = useToast();

  const testEmailJS = async () => {
    setIsTesting(true);
    
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if all required environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your .env file.');
      }

      if (serviceId === 'your_service_id_here' || templateId === 'your_template_id_here' || publicKey === 'your_public_key_here') {
        throw new Error('Please update your .env file with actual EmailJS values.');
      }

      const testParams = {
        from_name: 'Test User',
        from_email: 'test@example.com',
        company: 'Test Company Ltd',
        subject: 'EmailJS Test Message',
        message: 'This is a test message to verify EmailJS is working correctly with your CloudScan contact form.',
        to_email: 'your-email@example.com',
      };

      const response = await emailjs.send(serviceId, templateId, testParams, publicKey);
      
      console.log('EmailJS test successful:', response);
      
      toast({
        title: "Test email sent!",
        description: "Check your email inbox. If you don't see it, check your spam folder.",
      });
      
    } catch (error) {
      console.error('EmailJS test failed:', error);
      
      toast({
        title: "Test failed",
        description: error instanceof Error ? error.message : "Failed to send test email. Check console for details.",
        variant: "destructive",
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">EmailJS Test</h3>
      <p className="text-sm text-gray-600 mb-4">
        Click the button below to send a test email and verify your EmailJS configuration.
      </p>
      
      <div className="space-y-2 text-xs text-gray-500 mb-4">
        <p><strong>Service ID:</strong> {import.meta.env.VITE_EMAILJS_SERVICE_ID || 'Not set'}</p>
        <p><strong>Template ID:</strong> {import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'Not set'}</p>
        <p><strong>Public Key:</strong> {import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 'Set' : 'Not set'}</p>
      </div>
      
      <Button 
        onClick={testEmailJS} 
        disabled={isTesting}
        className="w-full"
      >
        {isTesting ? 'Sending Test Email...' : 'Send Test Email'}
      </Button>
      
      <p className="text-xs text-gray-500 mt-2">
        Make sure to update your .env file with real EmailJS values before testing.
      </p>
    </div>
  );
};

export default EmailJSTest;
