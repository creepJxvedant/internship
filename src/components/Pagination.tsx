import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination: React.FC = () => {
  return (
    <div className="bg-white px-6 py-4 border-t border-gray-200">
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </button>
          
          <div className="flex items-center space-x-1">
            <button className="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              1
            </button>
            <button className="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-md">
              2
            </button>
          </div>
          
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        <div className="absolute right-6 text-sm text-gray-500">
          <span className="bg-gray-100 px-2 py-1 rounded">2 / 2</span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;