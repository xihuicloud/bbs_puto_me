import TopBar from '@/components/TopBar';
import BottomNav from '@/components/BottomNav';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MessageCircle, UserPlus } from 'lucide-react';

const MOCK_NOTIFICATIONS = [
  {
    id: '1',
    type: 'like',
    user: { id: 'alex_chen', name: 'Alex Chen', avatar: 'https://picsum.photos/seed/alex/100/100' },
    content: 'liked your post in Photography.',
    timeAgo: '10m ago',
    read: false,
  },
  {
    id: '2',
    type: 'comment',
    user: { id: 'sarah_j', name: 'Sarah Jenkins', avatar: 'https://picsum.photos/seed/sarah/100/100' },
    content: 'commented: "This is absolutely stunning!"',
    timeAgo: '1h ago',
    read: false,
  },
  {
    id: '3',
    type: 'follow',
    user: { id: 'david_k', name: 'David Kim', avatar: 'https://picsum.photos/seed/david/100/100' },
    content: 'started following you.',
    timeAgo: '2h ago',
    read: true,
  },
  {
    id: '4',
    type: 'like',
    user: { id: 'emma_w', name: 'Emma Wilson', avatar: 'https://picsum.photos/seed/emma/100/100' },
    content: 'liked your comment.',
    timeAgo: '1d ago',
    read: true,
  }
];

export default function Notifications() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
      <TopBar title="Notifications" showSearch={false} />
      
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="divide-y divide-gray-100">
          {MOCK_NOTIFICATIONS.map(notification => (
            <div key={notification.id} className={`p-4 flex items-start space-x-3 ${!notification.read ? 'bg-indigo-50/50' : ''}`}>
              <Link href={`/user/${notification.user.id}`} className="relative block group">
                <div className="relative w-12 h-12 rounded-full overflow-hidden group-hover:opacity-90 transition-opacity">
                  <Image src={notification.user.avatar} alt={notification.user.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center bg-white">
                  {notification.type === 'like' && <Heart size={12} className="fill-rose-500 text-rose-500" />}
                  {notification.type === 'comment' && <MessageCircle size={12} className="fill-blue-500 text-blue-500" />}
                  {notification.type === 'follow' && <UserPlus size={12} className="text-emerald-500" />}
                </div>
              </Link>
              
              <div className="flex-1 min-w-0 pt-1">
                <p className="text-sm text-gray-900">
                  <Link href={`/user/${notification.user.id}`} className="font-semibold hover:underline">{notification.user.name}</Link> {notification.content}
                </p>
                <p className="text-xs text-gray-500 mt-1">{notification.timeAgo}</p>
              </div>
              
              {!notification.read && (
                <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}
