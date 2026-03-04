import Image from 'next/image';
import Link from 'next/link';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

export interface Post {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  circle?: {
    name: string;
    id: string;
  };
  content: string;
  images?: string[];
  likes: number;
  comments: number;
  timeAgo: string;
  isLiked?: boolean;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white p-4 border-b border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <Link href={`/user/${post.author.id}`} className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-sm text-gray-900 group-hover:underline">{post.author.name}</span>
              {post.circle && (
                <>
                  <span className="text-gray-400 text-xs">•</span>
                  <span className="text-xs font-medium text-indigo-600 hover:underline">{post.circle.name}</span>
                </>
              )}
            </div>
            <span className="text-xs text-gray-500">{post.timeAgo}</span>
          </div>
        </Link>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="mb-3">
        <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">{post.content}</p>
      </div>

      {/* Images */}
      {post.images && post.images.length > 0 && (
        <div className={`grid gap-2 mb-3 ${post.images.length === 1 ? 'grid-cols-1' : post.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
          {post.images.map((img, idx) => (
            <div key={idx} className={`relative rounded-xl overflow-hidden bg-gray-100 ${post.images!.length === 1 ? 'aspect-video' : 'aspect-square'}`}>
              <Image src={img} alt="Post image" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between text-gray-500 pt-1">
        <div className="flex items-center space-x-6">
          <button className={`flex items-center space-x-1.5 group ${post.isLiked ? 'text-rose-500' : ''}`}>
            <div className="p-1.5 rounded-full group-hover:bg-rose-50 transition-colors">
              <Heart size={20} className={post.isLiked ? 'fill-current' : ''} />
            </div>
            <span className="text-xs font-medium">{post.likes}</span>
          </button>
          <button className="flex items-center space-x-1.5 group">
            <div className="p-1.5 rounded-full group-hover:bg-blue-50 transition-colors">
              <MessageCircle size={20} />
            </div>
            <span className="text-xs font-medium">{post.comments}</span>
          </button>
        </div>
        <button className="flex items-center space-x-1.5 group">
          <div className="p-1.5 rounded-full group-hover:bg-gray-100 transition-colors">
            <Share2 size={20} />
          </div>
        </button>
      </div>
    </div>
  );
}
