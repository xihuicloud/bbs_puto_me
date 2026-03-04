import TopBar from '@/components/TopBar';
import BottomNav from '@/components/BottomNav';
import Image from 'next/image';
import { Settings, Grid, Bookmark, Heart } from 'lucide-react';

export default function Profile() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-gray-50">
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-4 py-3 flex items-center justify-between pt-safe">
        <h1 className="text-xl font-bold tracking-tight text-gray-900">Profile</h1>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <Settings size={20} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Profile Header */}
        <div className="bg-white px-4 pt-2 pb-6 border-b border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100">
              <Image src="https://picsum.photos/seed/myavatar/200/200" alt="My Profile" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">Jordan Lee</h2>
              <p className="text-sm text-gray-500">@jordanlee • UI/UX Designer</p>
              <div className="flex space-x-4 mt-2">
                <div>
                  <span className="font-bold text-gray-900">142</span> <span className="text-xs text-gray-500">Following</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">8.4k</span> <span className="text-xs text-gray-500">Followers</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-800 mb-4">
            Exploring the world through design and code. Coffee enthusiast. ☕️✨
          </p>
          <div className="flex space-x-2">
            <button className="flex-1 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-semibold">Edit Profile</button>
            <button className="flex-1 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-semibold">Share Profile</button>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="bg-white border-b border-gray-100 flex">
          <button className="flex-1 py-3 flex justify-center border-b-2 border-indigo-600 text-indigo-600">
            <Grid size={20} />
          </button>
          <button className="flex-1 py-3 flex justify-center text-gray-400 hover:text-gray-600">
            <Heart size={20} />
          </button>
          <button className="flex-1 py-3 flex justify-center text-gray-400 hover:text-gray-600">
            <Bookmark size={20} />
          </button>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-white">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div key={i} className="relative aspect-square bg-gray-100">
              <Image src={`https://picsum.photos/seed/post${i}/300/300`} alt="Post" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}
