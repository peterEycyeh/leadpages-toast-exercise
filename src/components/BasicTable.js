import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const columnTitles = [
  'First Name',
  'Last Name',
  'Full Name',
  'Email'
]

export default function BasicTable(props) {
  const { formSubmissions } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              columnTitles.map( (columnTitle) => (
                <TableCell>{columnTitle}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {formSubmissions.map((formSubmission) => (
            <TableRow
              key={formSubmission.data.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {formSubmission.data.firstName}
              </TableCell>
              <TableCell>{formSubmission.data.lastName}</TableCell>
              <TableCell>{formSubmission.data.firstName} {formSubmission.data.lastName}</TableCell>
              <TableCell>{formSubmission.data.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}