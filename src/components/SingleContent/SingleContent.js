import React from "react";
import { img_300, unavailable } from "../../config/Config";
import ContentModal from "../ContentModal/ContentModal";
import "../SingleContent/style.css";
const SingleContent = ({
  id,
  poster,
  title,
  media_type,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
    </ContentModal>
  );
};
export default SingleContent;
