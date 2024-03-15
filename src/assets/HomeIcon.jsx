import React from "react";

const HomeIcon = () => {
  let isActive = false;

  if (location.pathname === "/") {
    isActive = true;
  }

  return (
    <div className="h-6">
      {isActive ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <g>
            <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z" />
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <g>
            <path
              d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"
              fill="none"
              stroke="black"
            />
          </g>
        </svg>
      )}
    </div>
  );
};

export default HomeIcon;
