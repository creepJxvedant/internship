import { useState } from 'react';
import { TableRow, sampleData } from '../types/TableData';

export const useEditableData = () => {
  const [data, setData] = useState<TableRow[]>(sampleData);

  const updateCell = (rowIndex: number, field: keyof TableRow, value: string | number) => {
    setData(prevData => 
      prevData.map((row, index) => 
        index === rowIndex 
          ? { ...row, [field]: value }
          : row
      )
    );
  };

  const addRow = () => {
    const newRow: TableRow = {
      id: data.length + 1,
      jobRequest: 'New task...',
      submitted: new Date().toLocaleDateString('en-GB'),
      status: 'need-to-start',
      submitter: 'New User',
      url: 'www.example.com',
      assigned: 'Unassigned',
      priority: 'medium',
      dueDate: new Date().toLocaleDateString('en-GB'),
      estValue: '0'
    };
    setData(prevData => [...prevData, newRow]);
  };

  return {
    data,
    updateCell,
    addRow
  };
};