import React from 'react';
import { Plus,RefreshCcw,Link2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useEditableData } from '../hooks/useEditableData';

const ActionButtons: React.FC = () => {
  const { addRow } = useEditableData();

  const handleABCClick = () => {
    toast.success('ABC feature activated!', {
      duration: 3000,
      position: 'top-right',
      style: {
        background: '#10B981',
        color: 'white',
      },
    });
  };

  const handleAnswerQuestion = () => {
    toast('🤖 AI Assistant is ready to help!', {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#8B5CF6',
        color: 'white',
      },
    });
  };

  const handleExtract = () => {
    toast.loading('Extracting data...', {
      duration: 2000,
      position: 'top-right',
    });
    
    setTimeout(() => {
      toast.success('Data extracted successfully!', {
        duration: 3000,
        position: 'top-right',
        style: {
          background: '#F59E0B',
          color: 'white',
        },
      });
    }, 2000);
  };

  const handleAddNew = () => {
    addRow();
    toast.success('New row added! Double-click cells to edit.', {
      duration: 3000,
      position: 'top-right',
      icon: '📝',
    });
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className='flex-1  bg-gray-200 max-w-[50%] h-10'>
        <div className="flex items-center space-x-8 align-middle justify-start ml-6">
          <span className="text-sm text-blue-600 flex items-center bg-gray-100 mt-2 rounded-sm">
          <Link2 className='w-6 h-6 text-blue-500'></Link2>
           <span className='ml-4 text-lg text-slate-600'> Q3 Financial Overview</span> 
          </span>
          <RefreshCcw className='w-6 h-6 text-orange-400 mt-2'></RefreshCcw>
        </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={handleABCClick}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-green-100 border border-green-200 rounded-md hover:bg-green-200 transition-colors"
          >
            ABC
          </button>
          
          <button 
            onClick={handleAnswerQuestion}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-500 border border-purple-500 rounded-md hover:bg-purple-600 transition-colors"
          >
            Answer a question
          </button>
          
          <button 
            onClick={handleExtract}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 border border-orange-500 rounded-md hover:bg-orange-600 transition-colors"
          >
            Extract
          </button>
          
          <button 
            onClick={handleAddNew}
            className="inline-flex items-center justify-center w-10 h-10 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            title="Add new row"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;