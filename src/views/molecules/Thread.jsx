import React from 'react';
import PropTypes from 'prop-types';
import Title from '../atoms/Title';
import ThreadCard from './cards/ThreadCard';

function Thread({ dataThread, like, unlike }) {
  return (
    <section className="mt-3">
      <Title text="Threads" className="mb-2" />
      {dataThread.map((val) => (
        <ThreadCard
          key={val.id}
          id={val.id}
          title={val.title}
          body={val.body}
          category={val.category}
          createdAt={val.createdAt}
          author={val.owner.name}
          totalComments={val.comments.length}
          upVotes={val.upVotesBy}
          downVotes={val.downVotesBy}
          like={(id) => like(id)}
          unlike={(id) => unlike(id)}
        />
      ))}
    </section>
  );
}

Thread.propTypes = {
  dataThread: PropTypes.instanceOf(Array),
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired,
};

export default Thread;
