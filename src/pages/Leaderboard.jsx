import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../views/molecules/Navbar';
import Wrapper from '../views/atoms/Wrapper';
import Title from '../views/atoms/Title';
import UserCard from '../views/molecules/cards/UserCard';
import { asyncGetLeaderboards } from '../redux/leaderboards/action';

function Leaderboard() {
  const leaderboards = useSelector((state) => state.leaderboards);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncGetLeaderboards());
  }, []);

  return (
    <section>
      <Navbar />
      <Wrapper>
        <div>
          <Title text="Active Users Leaderboard" className="mt-2 mb-5" />
          <div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-xl">Users</p>
              <p className="font-medium text-xl">Score</p>
            </div>
            {leaderboards.map((val) => {
              return (
                <UserCard
                  key={val.user.id}
                  name={val.user.name}
                  image={val.user.avatar}
                  score={val.score}
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Leaderboard;
