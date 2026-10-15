
import { useRef, useState } from "react";

export default function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [user, setUser] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setUser({
      username: usernameRef.current.value,
      password: passwordRef.current.value
    });
  }

  return (
    <div>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          ref={usernameRef}
          required
        />
        <br /><br />

        <label>Password: </label>
        <input
          type="password"
          ref={passwordRef}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      {user && (
        <div>
          <h2>Submitted Information</h2>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      )}
    </div>
  );
}
