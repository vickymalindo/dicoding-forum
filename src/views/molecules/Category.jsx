import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Title from '../atoms/Title';
import RegularButton from '../atoms/buttons/RegularButton';
import { asyncGetThreads } from '../../redux/threads/action';

function Category({ dataCategory }) {
  const [active, setActive] = React.useState('');
  const dispatch = useDispatch();

  const handleSearchThread = (text) => {
    const search = active === text ? '' : text;
    setActive(search);
    dispatch(asyncGetThreads(search));
  };
  return (
    <>
      <Title text="Popular Category" className="text-lg md:text-xl mb-2" />
      {dataCategory.map((val) => (
        <RegularButton
          key={val.id}
          text={val.category}
          className={`${
            val.category === active ? 'bg-blue-500 text-white mr-2' : 'mr-2'
          }`}
          onSearch={(text) => handleSearchThread(text)}
        />
      ))}
    </>
  );
}

Category.propTypes = {
  dataCategory: PropTypes.instanceOf(Array),
};

export default Category;
