import React, { useState } from "react";

const CustomSkeleton = ({ width, height, isLoading }) => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(isLoading);

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: "linear-gradient(to right, #ffffff, #f2f2f2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            borderRadius: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {isLoading ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            borderRadius: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        />
      ) : null}
    </div>
  );
};

export default CustomSkeleton;
