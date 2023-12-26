import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  MdOutlineThumbUp,
  MdOutlineThumbDownOffAlt,
  MdOutlineModeComment,
  MdOutlineCalendarToday,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title';
import RegularButton from '../../atoms/buttons/RegularButton';
import formatDate from '../../../utils/date';

function ThreadCard({
  id,
  title,
  body,
  category,
  createdAt,
  totalComments,
  author,
  upVotes,
  downVotes,
  like,
  unlike,
}) {
  const user = useSelector((state) => state.authUser);
  const activeUpVote = upVotes.includes(user.id);
  const activeDownVote = downVotes.includes(user.id);

  return (
    <section className="border border-slate-400 w-full px-3 py-2 rounded mb-2">
      <RegularButton
        text={category}
        className="py-0.5 px-2 pointer-events-none"
      />
      <Link to="/">
        <Title text={title} className="text-xl" />
      </Link>
      <p className="text-base mb-[10px]">
        {body.length > 100 ? `${body.slice(0, 100)}....` : body}
      </p>
      <div className="flex justify-start items-center gap-2">
        <button
          className={
            'flex justify-center gap-1 items-center' +
            (activeUpVote ? ' text-blue-400' : '')
          }
          onClick={() => like(id)}
        >
          <MdOutlineThumbUp className="inline-block" />
          <span className="inline-block">{upVotes.length}</span>
        </button>
        <button
          className={
            'flex justify-center gap-1 items-center' +
            (activeDownVote ? ' text-red-400' : '')
          }
          onClick={() => unlike(id)}
        >
          <MdOutlineThumbDownOffAlt className="inline-block" />
          <span className="inline-block">{downVotes.length}</span>
        </button>
        <div className="flex justify-center gap-1 items-center">
          <MdOutlineModeComment className="inline-block" />
          <span className="inline-block">{totalComments}</span>
        </div>
        <div className="flex justify-center gap-1 items-center">
          <MdOutlineCalendarToday className="inline-block" />
          <span className="inline-block text-sm">{formatDate(createdAt)}</span>
        </div>
        <span className="text-sm">craeted by : {author}</span>
      </div>
    </section>
  );
}

ThreadCard.propTypes = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  upVotes: PropTypes.instanceOf(Array).isRequired,
  downVotes: PropTypes.instanceOf(Array).isRequired,
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired,
};

export default ThreadCard;
