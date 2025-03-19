// src/app/ClientLayout.js
'use client';

import { CartProvider } from "../context/CartContext";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import Footer from '../components/Footer';
import Navbar from "@/components/Navbar";

export default function ClientLayout({ children }) {
  return (
    <CartProvider>
      <Navbar />
      {children}
      <FloatingWhatsAppButton />
      <Footer />
    </CartProvider>
  );
}