import React, { useState, useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import PriorityBadge from './PriorityBadge';
import toast from 'react-hot-toast';

interface EditablePriorityCellProps {
  value: 'high' | 'medium' | 'low';
  onSave: (newValue: 'high' | 'medium' | 'low') => void;
}

const priorityOptions = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' }
];

const EditablePriorityCell: React.FC<EditablePriorityCellProps> = ({ value, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (isEditing && selectRef.current) {
      selectRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editValue !== value) {
      onSave(editValue);
      toast.success('Priority updated successfully!', {
        duration: 2000,
        position: 'top-right',
      });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <div className="flex items-center space-x-1">
        <select
          ref={selectRef}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value as 'high' | 'medium' | 'low')}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          className="px-2 py-1 text-sm border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          {priorityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button
          onClick={handleSave}
          className="p-1 text-green-600 hover:text-green-800 transition-colors"
        >
          <Check className="w-3 h-3" />
        </button>
        <button
          onClick={handleCancel}
          className="p-1 text-red-600 hover:text-red-800 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    );
  }

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className="cursor-pointer hover:bg-blue-50 px-2 py-1 rounded transition-colors"
      title="Double-click to edit"
    >
      <PriorityBadge priority={value} />
    </div>
  );
};

export default EditablePriorityCell;