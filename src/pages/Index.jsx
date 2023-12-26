import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../views/molecules/Navbar';
import Thread from '../views/molecules/Thread';
import Category from '../views/molecules/Category';
import RoundedButton from '../views/atoms/buttons/RoundedButton';
import {
  asyncGetThreads,
  asyncLikeThread,
  asyncUnlikeThread,
} from '../redux/threads/action';
import Wrapper from '../views/atoms/Wrapper';
import { asyncGetCategories } from '../redux/category/action';

function Index() {
  const threads = useSelector((states) => states.threads);
  const categories = useSelector((states) => states.categories);
  const dispatch = useDispatch();

  const handleLike = async (id) => {
    dispatch(asyncLikeThread(id));
  };

  const handleUnlike = async (id) => {
    dispatch(asyncUnlikeThread(id));
  };

  React.useEffect(() => {
    dispatch(asyncGetCategories());
    dispatch(asyncGetThreads());
  }, [dispatch]);

  return (
    <section>
      <Navbar />
      <Wrapper>
        <div>
          <Category dataCategory={categories} />
          <Thread
            dataThread={threads}
            like={(id) => handleLike(id)}
            unlike={(id) => handleUnlike(id)}
          />
        </div>
      </Wrapper>
      <RoundedButton />
    </section>
  );
}
export default Index;
