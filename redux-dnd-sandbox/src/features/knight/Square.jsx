import React from "react";

export const Square = ({ isBlack }) => {
  const fill = isBlack ? "black" : "white";

  return <div style={{ backgroundColor: fill }} />;
};
