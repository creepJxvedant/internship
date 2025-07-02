import React from 'react';
import { 
  EyeOff, 
  ArrowUpDown, 
  Filter, 
  Grid3X3, 
  Download, 
  Upload, 
  Share2,
  Plus,
  Search
} from 'lucide-react';

const Toolbar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-600">Tool bar</span>
            <span className="text-gray-400">»</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <EyeOff className="w-4 h-4 mr-2" />
              Hide Fields
            </button>
            
            <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              Sort
            </button>
            
            <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
            
            <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <Grid3X3 className="w-4 h-4 mr-2" />
              Cell view
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Upload className="w-4 h-4 mr-2" />
            Import
          </button>
          
          <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          
          <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>
          
          <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-md hover:bg-green-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            New Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;