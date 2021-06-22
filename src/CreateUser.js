import React, { useContext, useRef } from 'react';
import { UserDispatch } from './App';
import useInputs from './hooks/useInputs';

function CreateUser() {
  const [{ username, email }, onChange, onReset] = useInputs({
    username: '',
    email: '',
  });

  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);
  const onCreate = () => {
    dispatch({
      type: 'CREATE_USERS',
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    onReset();
    nextId.current += 1;
  };
  return (
    <div>
      <input name="username" onChange={onChange} placeholder="username" value={username} />
      <input name="email" onChange={onChange} placeholder="email" value={email} />
      <button onClick={onCreate}>Register</button>
    </div>
  );
}
export default React.memo(CreateUser);
