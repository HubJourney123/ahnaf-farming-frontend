// src/components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

const Footer = () => {
  const categories = [
    { name: 'গুড় (Molasses)', href: '/category/molasses' },
    { name: 'সরিষার তেল ও ঘি (Mustard Oil & Ghee)', href: '/category/oil-and-ghee' },
    { name: 'গুঁড়া মশলা (Spices Powder)', href: '/category/spices' },
    { name: 'আমের পণ্য (Mango Products)', href: '/category/mango' },
  ];

  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Branding */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.svg"
              alt="Ahnaf Farming Logo"
              width={160}
              height={160}
              className="mb-4"
            />
            <p className="text-center md:text-left text-lg">
              Ahnaf Farming - Symbol of Purity
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:mikhalil7519@gmail.com" className="hover:text-amber-400 transition-colors">
                  mikhalil7519@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="https://wa.me/+8801753388992" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  01753388992
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>শিবগন্জ, চাঁপাইনবাবগঞ্জ</span>
              </li>
              <li className="flex items-center space-x-2">
                <Facebook size={18} />
                <a href="https://www.facebook.com/share/16A3r22B8j/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  Follow us on Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href} className="hover:text-amber-400 transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-green-600 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ahnaf Farming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;