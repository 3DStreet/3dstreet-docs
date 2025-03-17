import React, { useEffect } from 'react';

export default function HubSpotForm() {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/242249954.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    // Clean up on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="hs-form-frame" 
      data-region="na2" 
      data-form-id="16b387dd-f362-4ae7-907f-649823e76244" 
      data-portal-id="242249954"
    />
  );
}