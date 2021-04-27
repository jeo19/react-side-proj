import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, SetNickname] = useState('');
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    SetNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />

        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          {' '}
          my name is <b>{name}</b>
        </div>
        <div>
          my nickname is <b>{nickname}</b>
        </div>
      </div>
    </div>
  );
};
export default Info;
