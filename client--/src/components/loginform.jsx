import { useState } from "react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password.");
      return;
    }

    onLogin(email);
  };

  return (
    <section className="login-section" id="login">
      <div className="login-box">
        <h2>Login to Campus Connect</h2>

        <form onSubmit={handleSubmit}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;