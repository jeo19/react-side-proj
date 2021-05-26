import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: '1',
      name: 'Alina',
      email: 'alina@gmail.com',
    },
    {
      id: '2',
      name: 'pablo',
      email: 'pablo@outlook.com',
    },
    {
      id: '3',
      name: 'Liana',
      email: 'liana@yandex.com',
    },
  ];
  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  };
  return <UserList users={users} />;
}

export default App;
