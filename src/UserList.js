import React from 'react';

const User = React.memo(({ user }) => (
  <div>
    <b style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }} onClick={() => {}}>
      {user.username}
    </b>
    &nbsp;
    <span>({user.email})</span>
    <button onClick={() => {}}>Delete</button>
  </div>
));
function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}
export default React.memo(UserList);
