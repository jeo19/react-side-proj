import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input name="username" onChange={onChange} placeholder="username" value={username} />
      <input name="email" onChange={onChange} placeholder="email" value={email} />
      <button onClick={onCreate}>Register</button>
    </div>
  );
}
export default CreateUser;
