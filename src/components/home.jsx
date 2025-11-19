import { useState } from "react";

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!username || !password) {
      setMessage('');
      return;
    }
    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div style={{ background: "#272e38", height: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: "#fff", padding: 30, borderRadius: 8, minWidth: 320 }}>
        <h1 style={{ marginBottom: 24 }}>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="username" style={{ width: 100, display: "inline-block" }}>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              placeholder="username"
              style={{ width: 180, padding: 5 }}
            />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="password" style={{ width: 100, display: "inline-block" }}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="password"
              style={{ width: 180, padding: 5 }}
            />
          </div>
          <button type="submit" style={{ padding: "6px 18px" }}>Submit</button>
        </form>
        {submitted && (!username || !password) && (
          <div style={{ marginTop: 16, color: "#b94141" }}>Please fill out this field.</div>
        )}
        {message && (
          <div style={{ marginTop: 16, color: message === "Welcome, user!" ? "#227722" : "#b94141" }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
