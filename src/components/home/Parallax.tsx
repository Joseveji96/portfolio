"use client";
import React from 'react';

const Parallax = () => {
  return (
    <div className="flex justify-center h-[600px] mt-12 mb-52" style={{ borderRadius: 14 }}>
      <div className="w-[85%]">
        <div
          className="parallax-card w-full h-[600px] bg-cover bg-center"
          style={{ backgroundImage: 'url("/imgFond.jpg")', borderRadius: 14 }}
        >
          <div className="p-12">
            <h1 className="text-8xl font-dm font-normal">About</h1>
            <p>I'm a software engineer based in Mexico</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
