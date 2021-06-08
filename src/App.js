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
      username: 'Pablo',
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
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };

    case 'CREATE_USERS':
      return {
        inputs: initialStete.inputs,
        users: state.users.concat(action.user),
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialStete);
  const { users } = state;
  const { username, email } = state.inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  };
  return (
    <>
      <CreateUser username={username} email={email} onChange={onchange} />
      <UserList users={users} />
      <div>An active users:0</div>
    </>
  );
}

export default App;
