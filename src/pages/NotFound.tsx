// import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      Page Not Found
      <Link to="/" className="">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
