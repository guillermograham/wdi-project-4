import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group user-input">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={user.username}
          className="input"
        />
      </div>
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
      <div className="form-group user-input">
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.passwordConfirmation}
          className="input"
        />
      </div>
      <div className="user-input">
        <button className="button is-primary login-button">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
