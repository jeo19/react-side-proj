import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.name}</b>
      <span>({user.email})</span>
    </div>
  );
}
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
      {users.map((user,index) => (
        <User user={user}  key={index}/>
      ))}
    </div>
  );
}
export default UserList;
