import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTables } from '../state/slices/tableSlice';

const ScrollableTable = ({ height }) => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.table.table);
  const status = useSelector((state) => state.table.status);
  const error = useSelector((state) => state.table.error);

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  return (
    <TableContainer component={Paper} style={{ maxHeight: "400px", overflowY: 'auto' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '50px', borderRight: '1px solid #ddd ',fontWeight: 'bold'}}>id</TableCell>
            <TableCell style={{ width: '150px', borderRight: '1px solid #ddd',fontWeight: 'bold' }}>name</TableCell>
            <TableCell style={{ width: '100px', borderRight: '1px solid #ddd',fontWeight: 'bold' }}>quantity</TableCell>
            <TableCell style={{ width: '100px',fontWeight: 'bold' }}>price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white', /* alternate row colors */ }}
            >
              <TableCell style={{ borderRight: '1px solid #ddd' }}>{row.id}</TableCell>
              <TableCell style={{ borderRight: '1px solid #ddd' }}>{row.name}</TableCell>
              <TableCell style={{ borderRight: '1px solid #ddd' }}>{row.quantity}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScrollableTable;
