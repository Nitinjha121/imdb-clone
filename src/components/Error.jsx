import React from "react";

function Error({ error }) {
  return (
    <div>
      <div>{String(error)}</div>
    </div>
  );
}

export default Error;
