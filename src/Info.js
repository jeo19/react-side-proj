import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, SetNickname] = useState('');
  useEffect(() => {
    console.log('Run only when a component mounted.');
    console.log({ name, nickname });
  }, []);
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
