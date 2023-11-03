"use client";

import { useState } from "react";

const AnnouncementBar: React.FC = () => {
  const [showBar, setShowBar] = useState(true);

  const handleClose = () => {
    setShowBar(false);
  };

  return showBar ? (
    <div className="relative">
      <div className="bg-blue-500 p-1 sm:p-2 flex items-center justify-center text-white">
        <p className="text-sm sm:text-base">
          Use code <b>DECEM10</b> for <b>$10 OFF</b> on your first order
        </p>
        <button onClick={handleClose} className="m-2 right-2 absolute  sm:right-5 cursor-pointer">
            X
        </button>
      </div>
    </div>
  ) : null;
};

export default AnnouncementBar;
