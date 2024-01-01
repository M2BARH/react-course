export const user = {
  email: "",
  password: "",
  loggedIn: false,
};

function App() {
  function handleClick() {
    user.email = "example@email.com";
    user.password = "3x@mple0";
    user.loggedIn = true;
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={handleClick}>Login</button>
      </p>
    </div>
  );
}

export default App;
