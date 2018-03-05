import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {
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
      <div className="error">
        {errors.username && <div>{errors.username}</div>}
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
      <div className="error">
        {errors.email && <div>{errors.email}</div>}
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
      <div className="error">
        {errors.password && <div>{errors.password}</div>}
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
      <div className="error">
        {errors.passwordConfirmation && <div>{errors.passwordConfirmation}</div>}
      </div>
      <div className="user-input">
        <button className="button is-primary login-button">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
