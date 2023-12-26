import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../views/molecules/Navbar';
import Wrapper from '../views/atoms/Wrapper';
import useInput from '../hooks/useInput';
import Title from '../views/atoms/Title';
import { asyncAddThread } from '../redux/threads/action';
import AddThreadFrom from '../views/molecules/forms/AddThreadFrom';

function AddThread() {
  const [title, setTitle] = useInput('');
  const [body, setBody] = useInput('');
  const [category, setCategory] = useInput('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddThread = async (e) => {
    e.preventDefault();
    dispatch(
      asyncAddThread({
        title,
        body,
        category,
        navigate,
      })
    );
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <div>
          <Title text="Add Thread" className="mb-2" />
          <AddThreadFrom
            setTitle={setTitle}
            setBody={setBody}
            setCategory={setCategory}
            addThread={handleAddThread}
          />
        </div>
      </Wrapper>
    </>
  );
}

export default AddThread;
