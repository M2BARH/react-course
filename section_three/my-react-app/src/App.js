import React from "react";
import Review from "./components/review_component/Review";

function App() {
  const [feedBack, setFeedBack] = React.useState();
  const [name, setName] = React.useState();

  function handleFeedBackChange(event) {
    setFeedBack(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedBack} onChange={handleFeedBackChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedBack} student={name} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
