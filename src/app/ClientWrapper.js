// src/app/ClientWrapper.js
'use client';
import { CartProvider } from '../../context/CartContext';

export default function ClientWrapper({ children }) {
  return <CartProvider>{children}</CartProvider>;
}