import React from 'react';
import useInputs from './useInputs';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
const UserInfo = () => {
  const [state, onChange] = useInputs( {
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;
  console.log(state);
  return (
    <div>
      <div>
        <input name="name" onChange={onChange} value={name} placeholder="name" />
        <input name="nickname" onChange={onChange} value={nickname} placeholder="nickname" />
      </div>
      <div>
        <div>
          <b>name:</b>
          {name}
        </div>
        <div>
          <b>nickname:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
