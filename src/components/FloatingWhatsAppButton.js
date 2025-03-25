'use client';
import { useEffect } from 'react';
import Image from 'next/image'; // Added import

const FloatingWhatsAppButton = () => {
  const whatsappLink = "https://wa.me/+8801753388992";

  useEffect(() => {
    const styles = `
      @keyframes gentle-float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }
      @keyframes firefly-glow {
        0% { box-shadow: 0 0 5px rgba(37, 211, 102, 0.4), 0 0 10px rgba(37, 211, 102, 0.2); }
        50% { box-shadow: 0 0 10px rgba(37, 211, 102, 0.7), 0 0 20px rgba(37, 211, 102, 0.5), 0 0 30px rgba(37, 211, 102, 0.3); }
        100% { box-shadow: 0 0 5px rgba(37, 211, 102, 0.4), 0 0 10px rgba(37, 211, 102, 0.2); }
      }
      .whatsapp-button {
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: #25D366;
        color: white;
        border-radius: 50%;
        padding: 16px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        z-index: 50;
        animation: gentle-float 3s infinite ease-in-out, firefly-glow 2s infinite ease-in-out;
      }
      .whatsapp-button:hover {
        transform: scale(1.1);
        box-shadow: 0 0 15px rgba(37, 211, 102, 0.8), 0 0 30px rgba(37, 211, 102, 0.6);
      }
      .whatsapp-button::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        background: radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(37, 211, 102, 0) 70%);
        opacity: 0.4;
        z-index: -1;
        animation: inner-light 3s infinite alternate ease-in-out;
      }
      @keyframes inner-light {
        0% { opacity: 0.2; transform: scale(0.8); }
        100% { opacity: 0.5; transform: scale(1.2); }
      }
    `;
    
    if (!document.querySelector('#whatsapp-button-styles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'whatsapp-button-styles';
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300 z-50 whatsapp-button"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/WA.png"
        alt="WhatsApp"
        width={30}
        height={30}
      />
    </a>
  );
};

export default FloatingWhatsAppButton;
