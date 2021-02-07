import React from "react";

function Picture(props) {
  const { src } = props;
  return (
    <picture className="work-item_img">
      <img src={src} alt="badge" style={{ width: "100%" }} />
    </picture>
  );
}

export default Picture;
