import React from 'react';

function UserList() {
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
  return (
    <div>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}
