import React, { useState } from 'react';

function InputSample() {
  const [input, setInput] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = input;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onReset = () => {
    setInput({
      name: '',
      nickname: '',
    });
  };

  return (
    <div>
      <input placeholder="name" name="name" onChange={onChange} />
      <input placeholder="nickname" name="nickname" onChange={onChange} />
      <button onClick={onReset}>Reset</button>
      <div>
        <b>name:</b>
        {name}({nickname})
      </div>
    </div>
  );
}
export default InputSample;
