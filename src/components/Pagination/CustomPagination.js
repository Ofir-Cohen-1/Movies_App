import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../Pagination/style.css"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className="pagination">
      <ThemeProvider theme={darkTheme}>
        <Stack spacing={2}>
          <Pagination
            count={numOfPages}
            hidePrevButton
            hideNextButton
            onChange={(e) => handlePageChange(e.target.textContent)}
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
