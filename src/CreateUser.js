import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input name="username" onChange={onChange} placeholder="username" value={username} />
      <input name="email" onChange={onchange} placeholder="email" value={email} />
      <button>Register</button>
    </div>
  );
}
export default CreateUser;
