import React from "react";

function CustomIcon({ href, iconImg }) {
  return (
    <button>
      <a href={`https://${href}`} target="_blank">
        <img src={iconImg} />
      </a>
    </button>
  );
}

export default CustomIcon;
