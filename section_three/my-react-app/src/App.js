export const user = {
  name: '',
};

function App() {
  function handleCreateUser(name) {
    user.name = name;
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p id="actions">
        <button onClick={() => handleCreateUser("2lani")}>Create User</button>
      </p>
    </div>
  );
}

export default App;
