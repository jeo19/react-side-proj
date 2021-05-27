import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: '1',
      username: 'Alina',
      email: 'alina@gmail.com',
    },
    {
      id: '2',
      username: 'pablo',
      email: 'pablo@outlook.com',
    },
    {
      id: '3',
      username: 'Liana',
      email: 'liana@yandex.com',
    },
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    nextId.current += 1;
    setInputs({
      username: '',
      email: '',
    });
  };
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} />
    </>
  );
}

export default App;
