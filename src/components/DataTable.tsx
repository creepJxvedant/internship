import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table';
import { ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';
import { TableRow } from '../types/TableData';
import { useEditableData } from '../hooks/useEditableData';
import EditableCell from './EditableCell';
import EditableStatusCell from './EditableStatusCell';
import EditablePriorityCell from './EditablePriorityCell';

const columnHelper = createColumnHelper<TableRow>();

const DataTable: React.FC = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const { data, updateCell } = useEditableData();

  const paddedData = useMemo(() => {
    const extraRows =15;
    const emptyRows: TableRow[] = Array.from({ length: extraRows }, () => ({
      id: '',
      jobRequest: '',
      submitted: '',
      status: '',
      submitter: '',
      url: '',
      assigned: '',
      priority: '',
      dueDate: '',
      estValue: '',
    }));
    return [...data, ...emptyRows];
  }, [data]);

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        header: '#',
        cell: info => <span>{info.row.index + 1}</span>,
        size: 40,
        enableSorting: false,
      }),
      columnHelper.accessor('jobRequest', {
        header: 'Job Request',
        cell: info => (
          <EditableCell
            value={info.getValue() ?? ''}
            onSave={(newValue) => updateCell(info.row.index, 'jobRequest', newValue)}
            className="max-w-xs"
          />
        ),
        size: 220,
      }),
      columnHelper.accessor('submitted', {
        header: 'Submitted',
        cell: info => (
          <EditableCell
            value={info.getValue() ?? ''}
            onSave={(newValue) => updateCell(info.row.index, 'submitted', newValue)}
            type="date"
          />
        ),
        size: 90,
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: info => (
          <EditableStatusCell
            value={info.getValue() ?? ''}
            onSave={(newValue) => updateCell(info.row.index, 'status', newValue)}
          />
        ),
        size: 90,
      }),
      columnHelper.accessor('submitter', {
        header: 'Submitter',
        cell: info => (
          <EditableCell
            value={info.getValue() ?? ''}
            onSave={(newValue) => updateCell(info.row.index, 'submitter', newValue)}
          />
        ),
        size: 100,
      }),
      columnHelper.accessor('url', {
        header: 'URL',
        cell: info => (
          <div className="flex items-center space-x-1">
            <EditableCell
              value={info.getValue() ?? ''}
              onSave={(newValue) => updateCell(info.row.index, 'url', newValue)}
              className="flex-1"
            />
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              onClick={(e) => e.preventDefault()}
              title="Open URL"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        ),
        size: 100,
        enableSorting: false,
      }),
      columnHelper.accessor('assigned', {
        header: 'Assigned',
        cell: info => (
          <EditableCell
            value={info.getValue() ?? ''}
            onSave={(newValue) => updateCell(info.row.index, 'assigned', newValue)}
          />
        ),
        size: 100,
      }),
      columnHelper.accessor('priority', {
        header: 'Priority',
        cell: info => (
          <EditablePriorityCell
            value={info.getValue() ?? ''}
            onSave={(newValue) => updateCell(info.row.index, 'priority', newValue)}
          />
        ),
        size: 70,
      }),
      columnHelper.accessor('dueDate', {
        header: 'Due Date',
        cell: info => (
          <EditableCell
            value={info.getValue() ?? ''}
            onSave={(newValue) => updateCell(info.row.index, 'dueDate', newValue)}
            type="date"
          />
        ),
        size: 90,
      }),
      columnHelper.accessor('estValue', {
        header: 'Est. Value',
        cell: info => (
          <div className="flex items-center">
            <EditableCell
              value={info.getValue() ?? ''}
              onSave={(newValue) => updateCell(info.row.index, 'estValue', newValue)}
              className="font-medium"
            />
            <span className="ml-1 text-gray-500">₹</span>
          </div>
        ),
        size: 90,
      }),
    ],
    [updateCell]
  );

  const table = useReactTable({
    data: paddedData,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200 bg-gray-50"
                    style={{ width: header.getSize() }}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={`flex items-center space-x-1 ${
                          header.column.getCanSort() ? 'cursor-pointer select-none' : ''
                        }`}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <span>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </span>
                        {header.column.getCanSort() && (
                          <div className="flex flex-col">
                            {header.column.getIsSorted() === 'asc' ? (
                              <ChevronUp className="w-3 h-3 text-gray-400" />
                            ) : header.column.getIsSorted() === 'desc' ? (
                              <ChevronDown className="w-3 h-3 text-gray-400" />
                            ) : (
                              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                              </svg>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors group">
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="px-3 py-2 whitespace-nowrap text-sm text-gray-900 border border-gray-200"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
