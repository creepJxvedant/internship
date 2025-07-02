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
} from 'lucide-react';
import toast from 'react-hot-toast';

const Toolbar: React.FC = () => {
  const handleHideFields = () => {
    toast('👁️ Field visibility options would appear here', {
      duration: 3000,
      position: 'top-right',
    });
  };

  const handleSort = () => {
    toast.success('Sort options applied!', {
      duration: 2000,
      position: 'top-right',
    });
  };

  const handleFilter = () => {
    toast('🔍 Filter panel would open here', {
      duration: 3000,
      position: 'top-right',
      icon: '⚡',
    });
  };

  const handleCellView = () => {
    toast('📊 Cell view options available', {
      duration: 2000,
      position: 'top-right',
    });
  };

  const handleImport = () => {
    toast.loading('Preparing import dialog...', {
      duration: 1500,
      position: 'top-right',
    });
    
    setTimeout(() => {
      toast.success('Import dialog ready!', {
        duration: 2000,
        position: 'top-right',
      });
    }, 1500);
  };

  const handleExport = () => {
    toast.loading('Generating export...', {
      duration: 2000,
      position: 'top-right',
    });
    
    setTimeout(() => {
      toast.success('Export completed! 📄', {
        duration: 3000,
        position: 'top-right',
      });
    }, 2000);
  };

  const handleShare = () => {
    toast('🔗 Share options would appear here', {
      duration: 3000,
      position: 'top-right',
      style: {
        background: '#3B82F6',
        color: 'white',
      },
    });
  };

  const handleNewAction = () => {
    toast.success('New action created!', {
      duration: 3000,
      position: 'top-right',
      style: {
        background: '#10B981',
        color: 'white',
      },
    });
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-600">Tool bar</span>
            <span className="text-gray-400">»</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleHideFields}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <EyeOff className="w-4 h-4 mr-2" />
              Hide Fields
            </button>
            
            <button 
              onClick={handleSort}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <ArrowUpDown className="w-4 h-4 mr-2" />
              Sort
            </button>
            
            <button 
              onClick={handleFilter}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
            
            <button 
              onClick={handleCellView}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Grid3X3 className="w-4 h-4 mr-2" />
              Cell view
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleImport}
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <Upload className="w-4 h-4 mr-2" />
            Import
          </button>
          
          <button 
            onClick={handleExport}
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          
          <button 
            onClick={handleShare}
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>
          
          <button 
            onClick={handleNewAction}
            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-green-600 border border-green-600 rounded-md hover:bg-green-700 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;