import { Search, MoreVertical } from 'lucide-react';

interface TopBarProps {
  title: string;
  showSearch?: boolean;
  rightAction?: React.ReactNode;
}

export default function TopBar({ title, showSearch = true, rightAction }: TopBarProps) {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center justify-between pt-safe">
      <h1 className="text-xl font-bold tracking-tight text-gray-900">{title}</h1>
      <div className="flex items-center space-x-3">
        {showSearch && (
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <Search size={20} />
          </button>
        )}
        {rightAction || (
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <MoreVertical size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
