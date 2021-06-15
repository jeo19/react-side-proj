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
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialStete);
  const nextId = useRef(4);
  const { users } = state;
  const { username, email } = state.inputs;
  const count = countActiveUsers(users);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
  }, []);
  const onCreate = useCallback(() => {
    dispatch(
      {
        type: 'CREATE_USERS',
        user: {
          id: nextId,
          username,
          email,
        },
      },
      [username, email],
    );
  });
  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE_USER', id });
  });
  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  }, []);
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>An active users:{count}</div>
    </>
  );
}

export default App;
