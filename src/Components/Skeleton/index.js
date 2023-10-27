import React from "react";

const DefaultCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
      <div className="w-full h-36 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-4/5 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
    </div>
  );
};

export default DefaultCardSkeleton;
