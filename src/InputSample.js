import React, { useRef, useState } from 'react';

function InputSample() {
  const [input, setInput] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = input;
  const useInput = useRef();
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onReset = () => {
    setInput({ name: '', nickname: '' });
    useInput.current.focus();
  };
  return (
    <div>
      <div>
        <input placeholder="name" name="name" ref={useInput} onChange={onChange} value={name} />
        <input placeholder="nickname" name="nickname" onChange={onChange} value={nickname} />
      </div>
      <div>
        <button onClick={onReset}>Reset</button>
      </div>
      <div>
        <p>name:{name}</p>
        <p>nickname:{nickname}</p>
      </div>
    </div>
  );
}
export default InputSample;
