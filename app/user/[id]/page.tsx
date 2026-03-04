import Image from 'next/image';
import Link from 'next/link';
import { Grid, Heart, ChevronLeft, MoreHorizontal } from 'lucide-react';

export default async function UserProfile({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const userId = resolvedParams.id;

  // Mock data based on ID (to show different states)
  const isFollowing = userId === 'alex_chen';
  
  // Format the name nicely from ID
  const formattedName = userId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-gray-50 z-50 relative">
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-4 py-3 flex items-center justify-between pt-safe border-b border-gray-100">
        <Link href="/" className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold tracking-tight text-gray-900">{formattedName}</h1>
        <button className="p-2 -mr-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal size={24} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto pb-6">
        {/* Profile Header */}
        <div className="bg-white px-4 pt-4 pb-6 border-b border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100">
              <Image src={`https://picsum.photos/seed/${userId}/200/200`} alt="User Profile" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{formattedName}</h2>
              <p className="text-sm text-gray-500">@{userId} • Content Creator</p>
              <div className="flex space-x-4 mt-2">
                <div>
                  <span className="font-bold text-gray-900">256</span> <span className="text-xs text-gray-500">Following</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">12.5k</span> <span className="text-xs text-gray-500">Followers</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-800 mb-4">
            Photography, tech, and everything in between. Let's connect! 🌟
          </p>
          <div className="flex space-x-2">
            <button className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${isFollowing ? 'bg-gray-100 text-gray-900' : 'bg-indigo-600 text-white'}`}>
              {isFollowing ? 'Following' : 'Follow'}
            </button>
            <button className="flex-1 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm font-semibold">Message</button>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="bg-white border-b border-gray-100 flex sticky top-0 z-30">
          <button className="flex-1 py-3 flex justify-center border-b-2 border-indigo-600 text-indigo-600">
            <Grid size={20} />
          </button>
          <button className="flex-1 py-3 flex justify-center text-gray-400 hover:text-gray-600">
            <Heart size={20} />
          </button>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-white">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div key={i} className="relative aspect-square bg-gray-100">
              <Image src={`https://picsum.photos/seed/user${userId}post${i}/300/300`} alt="Post" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
