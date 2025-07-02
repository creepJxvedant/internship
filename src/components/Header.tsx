import React, { useEffect, useRef } from 'react';
import { Bell } from 'lucide-react';
import toast from 'react-hot-toast';

const handleSearchBar = (msg: string) => {
  toast(msg, {
    duration: 4000,
    position: 'top-right',
    style: {
      background: '#8B5CF6',
      color: 'white',
    },
  });
};

const Header: React.FC = () => {
  const searchbarRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && searchbarRef.current && searchbarRef.current.value.trim() !== '') {
        const query = `searching : ${searchbarRef.current.value.trim()}`;
        searchbarRef.current.value = '';
        handleSearchBar(query);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="hover:text-gray-800 cursor-pointer transition-colors">Workspace</span>
            <span>›</span>
            <span className="hover:text-gray-800 cursor-pointer transition-colors">Folder 2</span>
            <span>›</span>
            <span className="font-medium text-gray-900">Spreadsheet 3</span>
            <span className="text-gray-400 ml-2">⋯</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-semibold text-gray-900">Intern Design Assignment</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="search-bar within sheet"
              className="search-bar pl-10 pr-4 py-2 w-64 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ref={searchbarRef}
            />
          </div>

          <button className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full text-xs text-white flex items-center justify-center">
              2
            </span>
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-900">John Doe</div>
              <div className="text-gray-500">john.doe...</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
