import React, { useState } from 'react';

interface CustomTableProps {
  columns: { Header: string; accessor: string }[];
  data: Record<string, unknown>[];
  rowsPerPage?: number;
}

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  data,
  rowsPerPage = 10,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <div className='hidden sm:block'>
        <table className='min-w-full text-sm text-left text-gray-500 dark:text-gray-400 break-words'>
          <thead className='text-md p-4 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              {columns.map((column, index) => (
                <th key={index} className='px-2 sm:px-6 py-1 max-w-xs text-xs'>
                  {column.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  rowIndex % 2 === 0
                    ? 'bg-white dark:bg-gray-800'
                    : 'bg-gray-50 dark:bg-gray-700'
                }
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className='px-1 sm:px-6 py-2 border '>
                    {Number.isNaN(Number(row[column.accessor] as string))
                      ? (row[column.accessor] as string)
                      : new Intl.NumberFormat('es-MX').format(
                          Number(row[column.accessor] as string)
                        )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='sm:hidden'>
        {currentData.map((row, rowIndex) => (
          <div key={rowIndex} className='border p-4 mb-2'>
            {columns.map((column, colIndex) => (
              <div key={colIndex} className='mb-1'>
                <strong>{column.Header}:</strong>
                {Number.isNaN(Number(row[column.accessor] as string))
                  ? (row[column.accessor] as string)
                  : new Intl.NumberFormat('es-MX').format(
                      Number(row[column.accessor] as string)
                    )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <nav
        className='flex items-center justify-between p-4'
        aria-label='Table navigation'
      >
        <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
          Mostrando{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>
            {startIndex + 1}
          </span>{' '}
          a{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>
            {endIndex > data.length ? data.length : endIndex}
          </span>{' '}
          de{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>
            {data.length}
          </span>
        </span>
        <ul className='inline-flex -space-x-px text-sm h-8'>
          <li>
            <button
              onClick={handlePrevPage}
              className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight ${
                currentPage === 1
                  ? 'text-gray-400'
                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-white'
              } bg-white dark:bg-gray-800 border border-gray-300 rounded-l-lg`}
            >
              Anterior
            </button>
          </li>
          {/* A continuación, puedes agregar más botones para números de página específicos si lo deseas */}
          <li>
            <button
              onClick={handleNextPage}
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                currentPage === totalPages
                  ? 'text-gray-400'
                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-white'
              } bg-white dark:bg-gray-800 border border-gray-300 rounded-r-lg`}
            >
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CustomTable;
