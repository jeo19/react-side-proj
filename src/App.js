import React, { useCallback, useMemo, useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('counting the active users');
  return users.filter((user) => user.active).length;
}

function App() {
  const initialStete = {
    inputs: {
      usename: '',
      email: '',
    },
    users: [
      {
        id: '1',
        username: 'Alina',
        email: 'alina@gmail.com',
        active: true,
      },
      {
        id: '2',
        username: 'pablo',
        email: 'pablo@outlook.com',
        active: false,
      },
      {
        id: '3',
        username: 'Liana',
        email: 'liana@yandex.com',
        active: false,
      },
    ],
  };
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs],
  );
  const [users, setUsers] = useState([
    {
      id: '1',
      username: 'Alina',
      email: 'alina@gmail.com',
      active: true,
    },
    {
      id: '2',
      username: 'pablo',
      email: 'pablo@outlook.com',
      active: false,
    },
    {
      id: '3',
      username: 'Liana',
      email: 'liana@yandex.com',
      active: false,
    },
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));
    nextId.current += 1;
    setInputs({
      username: '',
      email: '',
    });
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const onToggle = (id) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
  };
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>An active users:{count}</div>
    </>
  );
}

export default App;
