import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function BackMain() {
  return (
    <Link
      to="/"
      className="absolute top-5 left-5 flex items-center gap-3 text-lg"
    >
      <FaArrowLeft className="inline-block" />
      <span className="inline-block">Back to main</span>
    </Link>
  );
}

export default BackMain;
