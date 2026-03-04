'use client';

import Link from 'next/link';
import { Home, Compass, PlusSquare, Bell, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Compass, label: 'Discover', href: '/discover' },
    { icon: PlusSquare, label: 'Post', href: '/create' },
    { icon: Bell, label: 'Alerts', href: '/notifications' },
    { icon: User, label: 'Profile', href: '/profile' },
  ];

  return (
    <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 pb-safe pt-2 px-4 z-50">
      <div className="flex justify-between items-center mb-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex flex-col items-center justify-center w-14 h-12 transition-colors ${
                isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Icon size={isActive ? 26 : 24} strokeWidth={isActive ? 2.5 : 2} className="mb-1" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
