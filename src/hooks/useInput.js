import React from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}

export default useInput;
