import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../Pagination/CustomPagination";
import "../Trending/style.css";
// import { configure } from "@testing-library/react";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=ee4cf7db2e767d46b174f2b3e1fab0e0&page=${page}`
    );
    // console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((trending) => (
            <SingleContent
              key={trending.id}
              id={trending.id}
              poster={trending.poster_path}
              title={trending.title || trending.name}
              date={trending.release_date || trending.first_air_date}
              media_type={trending.media_type}
              vote_average={trending.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
