import React, { useCallback, useMemo, useReducer, useRef } from 'react';
import produce from 'immer';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('counting the active users');
  return users.filter((user) => user.active).length;
}

const initialState = {
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
    case 'CREATE_USERS':
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    case 'REMOVE_USER':
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });

    default:
      return state;
  }
}
export const UserDispatch = React.createContext(null);
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>An active users:{count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
