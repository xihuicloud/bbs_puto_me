'use client';

import { useState } from 'react';
import { X, Image as ImageIcon, Video, MapPin, Hash, Smile } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CreatePost() {
  const router = useRouter();
  const [content, setContent] = useState('');

  return (
    <div className="flex-1 flex flex-col h-full bg-white z-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 pt-safe">
        <button onClick={() => router.back()} className="p-2 -ml-2 text-gray-600">
          <X size={24} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">New Post</h1>
        <button 
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
            content.trim().length > 0 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-100 text-gray-400'
          }`}
        >
          Post
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            <Image src="https://picsum.photos/seed/myavatar/100/100" alt="Me" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <button className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
            <span>Select Circle</span>
            <span className="text-xs">▼</span>
          </button>
        </div>

        <textarea
          className="flex-1 w-full resize-none outline-none text-lg placeholder-gray-400"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          autoFocus
        />
      </div>

      {/* Toolbar */}
      <div className="border-t border-gray-100 p-4 pb-safe">
        <div className="flex items-center space-x-6 text-gray-500">
          <button className="hover:text-indigo-600 transition-colors flex flex-col items-center">
            <ImageIcon size={24} />
          </button>
          <button className="hover:text-indigo-600 transition-colors flex flex-col items-center">
            <Video size={24} />
          </button>
          <button className="hover:text-indigo-600 transition-colors flex flex-col items-center">
            <MapPin size={24} />
          </button>
          <button className="hover:text-indigo-600 transition-colors flex flex-col items-center">
            <Hash size={24} />
          </button>
          <button className="hover:text-indigo-600 transition-colors flex flex-col items-center">
            <Smile size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
