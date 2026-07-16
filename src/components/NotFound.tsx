import React from "react";
import notFoundImg from "../assets/musicIcons/404.png";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-black flex items-center justify-center px-6 overflow-hidden">
      <div className="relative w-full max-w-5xl h-screen flex items-center justify-center">
        <img
          src={notFoundImg}
          alt="404 Image"
          className="absolute inset-0 w-full h-full object-contain"
        />
        <h2 className="absolute bottom-10 z-10 text-6xl text-white font-bold">
          Page Not Found
        </h2>
      </div>
    </div>
  );
};

export default NotFoundPage;