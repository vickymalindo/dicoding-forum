import React from 'react';
import PropTypes from 'prop-types';

function UserCard({ name, image, score }) {
  return (
    <div className="flex justify-between items-center border-b border-b-slate-300 py-2.5">
      <div className="flex justify-start items-center gap-1.5">
        <img src={image} alt={`logo-${name}`} className="w-8 h-8 rounded" />
        <p className="text-lg">{name}</p>
      </div>
      <p className="text-lg">{score}</p>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default UserCard;
