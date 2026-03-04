import TopBar from '@/components/TopBar';
import BottomNav from '@/components/BottomNav';
import PostCard, { Post } from '@/components/PostCard';

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    author: {
      id: 'alex_chen',
      name: 'Alex Chen',
      avatar: 'https://picsum.photos/seed/alex/100/100',
    },
    circle: {
      name: 'Photography',
      id: 'c1',
    },
    content: 'Just got back from an amazing trip to the mountains. The morning light was absolutely perfect for these shots! 📸✨\n\nWhat do you guys think of the composition?',
    images: [
      'https://picsum.photos/seed/mountains1/800/600',
      'https://picsum.photos/seed/mountains2/800/600',
    ],
    likes: 245,
    comments: 42,
    timeAgo: '2h ago',
    isLiked: true,
  },
  {
    id: '2',
    author: {
      id: 'sarah_j',
      name: 'Sarah Jenkins',
      avatar: 'https://picsum.photos/seed/sarah/100/100',
    },
    circle: {
      name: 'Tech Talk',
      id: 'c2',
    },
    content: 'Has anyone tried the new React 19 features yet? The use hook is completely changing how I handle data fetching in my components. Would love to hear your thoughts and experiences so far!',
    likes: 128,
    comments: 56,
    timeAgo: '4h ago',
  },
  {
    id: '3',
    author: {
      id: 'david_k',
      name: 'David Kim',
      avatar: 'https://picsum.photos/seed/david/100/100',
    },
    circle: {
      name: 'Foodies',
      id: 'c3',
    },
    content: 'Made homemade ramen from scratch today! The broth simmered for 12 hours. Totally worth the effort. 🍜🤤',
    images: [
      'https://picsum.photos/seed/ramen/800/800',
    ],
    likes: 892,
    comments: 104,
    timeAgo: '6h ago',
  }
];

export default function Home() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-gray-50">
      <TopBar title="Feed" />
      
      {/* Categories/Tabs */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 flex space-x-6 overflow-x-auto scrollbar-hide">
        <button className="text-sm font-bold text-indigo-600 border-b-2 border-indigo-600 pb-2 whitespace-nowrap">Following</button>
        <button className="text-sm font-medium text-gray-500 pb-2 whitespace-nowrap">Recommended</button>
        <button className="text-sm font-medium text-gray-500 pb-2 whitespace-nowrap">Trending</button>
        <button className="text-sm font-medium text-gray-500 pb-2 whitespace-nowrap">Local</button>
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        <div className="flex flex-col space-y-2">
          {MOCK_POSTS.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}
