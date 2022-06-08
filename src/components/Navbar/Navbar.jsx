// import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material/styles";


import "../Navbar/Navbar.css";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/movies");
    else if (value === 2) history.push("/series");
    else if (value === 3) history.push("/search");
  }, [value, history]);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //     primary: {
  //       main: "#0000",
  //     },
  //   },
  // });


  return (
    // <ThemeProvider className="theme" theme={darkTheme}>
    <Box
      sx={{
        // backgroundColor: 'primary.dark',
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 100,
        // opacity: [0.9, 0.8, 0.7],
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Trending"
          icon={<WhatshotOutlinedIcon />}
        />
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Movies"
          icon={<MovieCreationOutlinedIcon />}
        />
        <BottomNavigationAction
          style={{ color: "black" }}
          label="TV series"
          icon={<TvOutlinedIcon />}
        />
        <BottomNavigationAction
          style={{ color: "black" }}
          label="Search"
          icon={<SearchOutlinedIcon />}
        />
      </BottomNavigation>
    </Box>
    // </ThemeProvider>
  );
}
