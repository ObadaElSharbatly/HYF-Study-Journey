import React from "react";

function Button({ getDogPhoto }) {
  return (
    <>
      <button onClick={getDogPhoto} data-testid="get-dog-btn">
        Get a dog!
      </button>
    </>
  );
}

export default Button;
