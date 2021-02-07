import React from "react";

function Title(props) {
  const { title, text } = props;
  return (
    <>
      <h1 className="content_title">{title}</h1>
      <p className="content_info">{text}</p>
    </>
  );
}

export default Title;
