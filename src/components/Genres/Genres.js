import axios from "axios";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { useEffect } from "react";
import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
import "../Genres/Genres.css";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((gen) => gen.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=ee4cf7db2e767d46b174f2b3e1fab0e0&language=en-US`
    );
    // console.log(data);
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    // return () => {
    //   setGenres({});
    // };
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="container">
      <ThemeProvider className="theme" theme={darkTheme}>
        {/* <Stack direction="row" spacing={1}> */}
        {selectedGenres &&
          selectedGenres.map((genre) => (
            <Chip
              className="chip"
              style={{
                padding: 2,
                margin: 2,
                borderRadius: 0,
              }}
              label={genre.name}
              size="small"
              color="primary"
              key={genre.id}
              clickable
              onDelete={()=>handleRemove(genre)}
            />
          ))}

        {/* </Stack> */}
      </ThemeProvider>

      <ThemeProvider className="theme" theme={darkTheme}>
        {/* <Stack direction="row" spacing={1}> */}
        {genres &&
          genres.map((genre) => (
            <Chip
              className="chip"
              style={{
                padding: 2,
                margin: 2,
                backgroundColor: "black",
                borderRadius: 0,
              }}
              label={genre.name}
              size="small"
              key={genre.id}
              clickable
              onClick={() => handleAdd(genre)}
            />
          ))}

        {/* </Stack> */}
      </ThemeProvider>
    </div>
  );
};

export default Genres;
