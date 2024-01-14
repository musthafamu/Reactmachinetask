import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTables } from '../state/slices/tableSlice';

const ScrollableTable = ({height}) => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.table.table);
  const status = useSelector((state) => state.table.status);
  const error = useSelector((state) => state.table.error);

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  return (
    <TableContainer component={Paper} style={{  maxHeight:"400px", overflowY: 'auto' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '50px' }}>id</TableCell>
            <TableCell style={{ width: '150px' }}>name</TableCell>
            <TableCell style={{ width: '100px' }}>quantity</TableCell>
            <TableCell style={{ width: '100px' }}>price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScrollableTable;
