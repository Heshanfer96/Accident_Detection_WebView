import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}




function DisplayTable() {

    const [accidentData, setAccidentData] = useState([]);

    const rows = accidentData

    useEffect(() => {
        // Define the URL of the API endpoint
        const apiUrl = 'https://accident-detect-backend-new.onrender.com/api/v1/accident';
    
        // Fetch data from the API
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            // Update the state with the fetched data
            setAccidentData(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
          
      }, []); 

      console.log(accidentData)
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">accident Severity</TableCell>
            <TableCell align="right">vehicle Number</TableCell>
            <TableCell align="right">vehicle Type</TableCell>
            <TableCell align="right">Telephone Number</TableCell>
            <TableCell align="right">Driver Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.accidentSeverity}</TableCell>
              <TableCell align="right">{row.driver?.vehicleNumber}</TableCell>
              <TableCell align="right">{row.driver?.vehicleType}</TableCell>
              <TableCell align="right">{row.driver?.user?.telNo}</TableCell>
              <TableCell align="right">{row.driver?.user?.firstName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DisplayTable