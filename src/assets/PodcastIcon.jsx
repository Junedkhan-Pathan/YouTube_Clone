import React from "react";

const PodcastIcon = () => {
  return (
    <div className="h-6">
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
        <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.66-.67 3.16-1.77 4.25l-.71-.71C16.44 14.63 17 13.38 17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.38.56 2.63 1.47 3.54l-.71.71C6.67 15.16 6 13.66 6 12zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V22h2v-8.28c.6-.34 1-.98 1-1.72zm-9.06 7.08.71-.71C4.01 16.74 3 14.49 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9c0 2.49-1.01 4.74-2.65 6.37l.71.71C20.88 17.27 22 14.77 22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 2.77 1.12 5.27 2.94 7.08z" />
      </svg>
    </div>
  );
};

export default PodcastIcon;
