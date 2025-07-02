import React from 'react';
import { Plus } from 'lucide-react';

const ActionButtons: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-blue-600 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Q3 Financial Overview
          </span>
          <span className="w-4 h-4 text-red-500">⚠</span>
        </div>
        
        <div className="flex items-center space-x-2 ml-auto">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-green-100 border border-green-200 rounded-md hover:bg-green-200 transition-colors">
            ABC
          </button>
          
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-500 border border-purple-500 rounded-md hover:bg-purple-600 transition-colors">
            Answer a question
          </button>
          
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 border border-orange-500 rounded-md hover:bg-orange-600 transition-colors">
            Extract
          </button>
          
          <button className="inline-flex items-center justify-center w-8 h-8 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;