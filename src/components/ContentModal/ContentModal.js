import * as React from "react";
import { useEffect, useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import axios from "axios";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/Config";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import Carousel from "../Carousel/Carousel";
import Badge from "@mui/material/Badge";

import "../ContentModal/ContentModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "92%",
  height: "80%",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "white",
};

export default function ContentModal({
  children,
  media_type,
  id,
  vote_average,
}) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=ee4cf7db2e767d46b174f2b3e1fab0e0&language=en-US`
    );
    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=ee4cf7db2e767d46b174f2b3e1fab0e0&language=en-US`
    );
    console.log(data);
    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return (
    <div>
      <div className="media" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* <Fade in={open}>
          {content && (
            <div className="ContantModal">
              <img
                src={
                  content.poster_path
                    ? `${img_500}/${content.poster_path}`
                    : unavailable
                }
                alt={content.name || content.title}
                className="ContentModal__portrait"
              />
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
} */}

        <Fade in={open}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-description" > */}

            {content && (
              <div className="ContentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.title}
                  </span>
                  {content.tagline && (
                    <i className="tagline">
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "-----"
                      ).substring(0, 4)}
                  <Badge
                    className="badge"
                    badgeContent={vote_average}
                    color={vote_average > 6 ? "primary" : "secondary"}
                  />
                    </i>
                  )}

                  <span className="ContentModal__description">
                    {content.overview}
                  </span>

                  {/* <div>
                    <Carousel id={id} media_type={media_type} />
                  </div> */}

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="primary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            )}
            {/* </Typography> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
