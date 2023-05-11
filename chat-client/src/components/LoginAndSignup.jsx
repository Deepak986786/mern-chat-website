import React from "react";
import "./LoginAndSignup.css";

import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated  , user} = useAuth0();
  console.log(user)
  return (
    <>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button onClick={() => loginWithRedirect()}>Log in</button>
          </form>
        </div>

        <div className="register">
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
              required=""
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Register</button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      {isAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      )}

      <ul>
        { isAuthenticated &&
            <li>
              <p>{user.name}</p>
            </li>
        }
      </ul>
    </>
  );
};

export default Login;
