import TopBar from '@/components/TopBar';
import BottomNav from '@/components/BottomNav';
import Image from 'next/image';
import { Users, ChevronRight } from 'lucide-react';

const MOCK_CIRCLES = [
  { id: '1', name: 'Photography', members: '12.4k', image: 'https://picsum.photos/seed/photo/200/200', desc: 'Share your best shots and techniques.' },
  { id: '2', name: 'Tech Talk', members: '45.2k', image: 'https://picsum.photos/seed/tech/200/200', desc: 'Discuss the latest in software and hardware.' },
  { id: '3', name: 'Foodies', members: '8.9k', image: 'https://picsum.photos/seed/food/200/200', desc: 'Recipes, restaurant reviews, and food pics.' },
  { id: '4', name: 'Fitness', members: '22.1k', image: 'https://picsum.photos/seed/fitness/200/200', desc: 'Workout routines, diet tips, and motivation.' },
  { id: '5', name: 'Gaming', members: '56.8k', image: 'https://picsum.photos/seed/gaming/200/200', desc: 'LFG, reviews, clips, and gaming news.' },
  { id: '6', name: 'Travel', members: '18.3k', image: 'https://picsum.photos/seed/travel/200/200', desc: 'Share your adventures and travel tips.' },
];

export default function Discover() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-gray-50">
      <TopBar title="Discover Circles" />
      
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4">
        
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Trending Circles</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {MOCK_CIRCLES.slice(0, 4).map(circle => (
              <div key={circle.id} className="min-w-[140px] bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-2">
                  <Image src={circle.image} alt={circle.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-semibold text-sm text-gray-900 truncate w-full">{circle.name}</h3>
                <p className="text-xs text-gray-500 flex items-center mt-1">
                  <Users size={12} className="mr-1" /> {circle.members}
                </p>
                <button className="mt-3 w-full py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold">
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3">All Categories</h2>
          <div className="space-y-3">
            {MOCK_CIRCLES.map(circle => (
              <div key={circle.id} className="bg-white rounded-xl p-3 flex items-center shadow-sm border border-gray-100">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden mr-3 flex-shrink-0">
                  <Image src={circle.image} alt={circle.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{circle.name}</h3>
                  <p className="text-xs text-gray-500 truncate mt-0.5">{circle.desc}</p>
                  <p className="text-xs text-gray-400 flex items-center mt-1">
                    <Users size={12} className="mr-1" /> {circle.members} members
                  </p>
                </div>
                <button className="ml-2 p-2 text-gray-400 hover:text-indigo-600">
                  <ChevronRight size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      <BottomNav />
    </div>
  );
}
