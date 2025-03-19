'use client';
// src/components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import { Menu, ShoppingCart, MessageCircle, X } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Corrected path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const whatsappLink = "https://wa.me/+8801753388992";
  const colors = {
    bg: 'bg-green-50',
    text: 'text-green-800',
    accent: 'hover:text-amber-600',
    menuBg: 'bg-green-100',
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className={`${colors.bg} shadow-lg sticky top-0 z-50`}>
      {/* Mobile View */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${colors.text} focus:outline-none`}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <Link href="/" className="flex items-center space-x-2">
          <span className={`${colors.text} text-xl font-bold`}>
            <span className="text-[#61bd12] text-xl font-bold">
              Ahnaf <span className="text-[#f98821]">Farming</span>
            </span>
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className={`${colors.text} relative`}>
            <ShoppingCart size={24} className={colors.accent} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={colors.text}>
            <MessageCircle size={24} className={colors.accent} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`${colors.menuBg} px-4 py-2 md:hidden`}>
          <ul className="space-y-2">
            {[
              { name: 'গুড় (Molasses)', href: '/category/molasses' },
              { name: 'সরিষার তেল ও ঘি (Mustard Oil & Ghee)', href: '/category/oil-and-ghee' }, // Updated to combined category
              { name: 'গুঁড়া মশলা (Spices Powder)', href: '/category/spices' },
              { name: 'আমের পণ্য (Mango Products)', href: '/category/mango' },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${colors.text} ${colors.accent} block py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop/Tablet View */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 relative">
        <Link href="/" className="flex items-center space-x-2 z-10">
          <img src="/icon.png" alt="Ahnaf Farming Logo" className="h-12 w-12" />
          <span className="text-[#61bd12] text-2xl font-bold">
            Ahnaf <span className="text-[#f98821]">Farming</span>
          </span>
        </Link>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <Link href="/" className={`${colors.text} ${colors.accent} text-xl font-medium`}>Home</Link>
          <div className="relative group">
            <button className={`${colors.text} ${colors.accent} text-xl font-medium`}>Category</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-8 p-2 min-w-[200px]">
  {[
    { name: 'গুড় (Molasses)', href: '/category/molasses' },
    { name: 'সরিষার তেল ও ঘি (Mustard Oil & Ghee)', href: '/category/oil-and-ghee' },
    { name: 'গুঁড়া মশলা (Spices Powder)', href: '/category/spices' },
    { name: 'আমের পণ্য (Mango Products)', href: '/category/mango' },
  ].map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className={`${colors.text} ${colors.accent} block py-1 px-4 whitespace-nowrap overflow-hidden`}
    >
      {item.name}
    </Link>
  ))}
</div>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`${colors.text} ${colors.accent} text-xl font-medium`}>
            WhatsApp
          </a>
        </div>
        <div className="z-10">
          <Link href="/cart" className={`${colors.text} relative`}>
            <ShoppingCart size={32} className={colors.accent} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;