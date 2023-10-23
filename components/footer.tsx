// components/Footer.ts
// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-gray-500 p-4 text-center">
        <hr style={{ borderTop: '1px solid #7286D3', width: '100%', marginBottom: '10px' }} />
      <div className="container mx-auto flex justify-between">
        <div>
          <a href="/privacy-policy" className="text-gray-500">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms-of-use" className="text-gray-500">Terms of Use</a>
          <span className="mx-2">|</span>
          <a href="/help-center" className="text-gray-500">Help Center</a>
        </div>
        <div>
          <p>&copy; 2023 copyright|All Rights Reserved
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
