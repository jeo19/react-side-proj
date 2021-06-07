import React, { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('counting the active users');
  return users.filter((user) => user.active).length;
}

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
function reducer(state, action) {
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialStete);
  const { users } = state;
  const { username, email } = state.inputs;
  return (
    <>
      <CreateUser />
      <UserList users={[]} />
      <div>An active users:0</div>
    </>
  );
}

export default App;
