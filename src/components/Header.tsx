import React from 'react';
import { Search, Bell, WineOff} from 'lucide-react';
import toast  from 'react-hot-toast';
import { useEffect } from 'react';


function showMessage(message: string): void {
  toast(message, {
    position: 'top-center',
    duration: 3000,
    style: {
      background: 'limegreen',
      border: '1px solid #ddd',
      color: 'white',
      borderRadius: '8px',
      padding: '10px 20px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    iconTheme: {
      primary: '#4A90E2',
      secondary: '#fff',
    },
  });
}



const Header: React.FC = () => {
  useEffect(() => {
    let searchbar = document.querySelector('.search-bar');
    if(!searchbar)
      searchbar = document.querySelector('.search-bar');

    const handleKeyDown = (e: KeyboardEvent) => {

      if (e.code === 'Enter' && searchbar) {
        const input = searchbar as HTMLInputElement;
        const query = input.value;
        input.value = ''; 
        showMessage(`Searching for: ${query}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown); 

    return () => {
      window.removeEventListener('keydown', handleKeyDown); 
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
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Search within sheet"
              className="search-bar pl-10 pr-4 py-2 w-64 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors">
           <Bell
  className="w-5 h-5"
  onClick={() => showMessage("Notification will be displayed")}
/>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full text-xs text-white flex items-center justify-center">
              2
            </span>
          </button>
          
          <div   onClick={() => showMessage("User profile will be displayed")} className="flex items-center space-x-2 ">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <img src="./img.jpg" className="w-full h-full rounded-full object-cover"/>
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