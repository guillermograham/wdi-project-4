import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group user-input">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="input"
        />
      </div>
      <div className="form-group user-input">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="input"
        />
      </div>
      <div className="user-input">
        <button className="button is-primary login-button">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
