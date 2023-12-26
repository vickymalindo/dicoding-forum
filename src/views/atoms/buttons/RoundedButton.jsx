import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function RoundedButton() {
  return (
    <Link
      to="add-note"
      className="outline-none fixed bottom-3 right-3 p-2 bg-sky-800 text-white w-12 h-12 flex justify-center items-center rounded-full"
    >
      <BsPlus className="inline-block text-xl font-bold" />
    </Link>
  );
}

export default RoundedButton;
