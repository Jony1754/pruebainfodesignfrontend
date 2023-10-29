import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';

interface CustomTableProps {
  columns: { Header: string; accessor: string }[];
  data: Record<string, unknown>[];
}

const CustomTable: React.FC<CustomTableProps> = ({ columns, data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    console.log('event', event);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label='custom table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.accessor} style={{ fontWeight: 'bold' }}>
                  {column.Header.split('_').length > 1
                    ? column.Header.split('_').join(' ')
                    : column.Header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column) => {
                    const value = row[column.accessor] as string | number;
                    let displayValue: React.ReactNode = value;

                    if (typeof value === 'number') {
                      displayValue =
                        value < 1
                          ? value.toFixed(6)
                          : new Intl.NumberFormat('es-MX').format(value);
                    }

                    return (
                      <TableCell key={column.accessor}>
                        {displayValue}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CustomTable;
