import React from "react";
import { capitalize, objectKeys } from "../utils/javascript";
import {
  Box,
  Table as MuiTable,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Table = ({ tableData }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const start = page * rowsPerPage;
  const end = page * rowsPerPage + rowsPerPage;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(+event.target.value);
  };

  const headers = [];
  tableData?.forEach((object) =>
    objectKeys(object).forEach((key) => {
      if (key !== "_id" && !headers.includes(key)) {
        headers.push(key);
      }
    })
  );

  if (!tableData?.length) {
    return (
      <Box>
        <Typography
          sx={{
            p: 2,
            border: "1px solid",
            borderColor: "divider",
            fontWeight: "bold",
          }}
        >
          No Data Available
        </Typography>
      </Box>
    );
  }

  return (
    <Paper elevation={0} sx={paperStyle}>
      <TableContainer sx={tableStyle}>
        <MuiTable stickyHeader>
          <TableHead>
            <TableRow>
              {headers.map((heading, ind) => (
                <TableCell key={ind} sx={headerStyle}>
                  {capitalize(heading)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.slice(start, end).map((data, ind) => (
              <TableRow hover key={ind}>
                {headers.map((field, id) => (
                  <TableCell key={id} align="left" sx={cellStyle}>
                    {data[field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>

      {tableData.length > 10 && (
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="section"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          showFirstButton
          showLastButton
          sx={paginationStyle}
        />
      )}
    </Paper>
  );
};

export default Table;

const paperStyle = {
  width: 800,
  borderRadius: 1.2,
};

const tableStyle = {
  maxHeight: 600,
  border: "1px solid",
  borderColor: "divider",
  borderBottom: "none",
  borderRadius: 1.2,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
};

const headerStyle = {
  fontSize: 17,
  fontWeight: "bolder",
  backgroundColor: "#f8f8f8",
};

const cellStyle = {
  fontSize: 16,
};

const paginationStyle = {
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 1.2,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  backgroundColor: "#f8f8f8",
};
