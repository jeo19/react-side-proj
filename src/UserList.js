import React from 'react';

function User({ user, onRemove }) {
  return (
    <div>
      <b style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }}>{user.username}</b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>Delete</button>
    </div>
  );
}
function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} onRemove={onRemove} />
      ))}
    </div>
  );
}
export default UserList;
