import React from "react";

function SpinerLoading() {
  return (
    <div>
      <div className="text-center mt-5">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
      <div className="text-center mt-3">
        <h2>Loading...</h2>
      </div>
    </div>
  );
}

export default SpinerLoading;
