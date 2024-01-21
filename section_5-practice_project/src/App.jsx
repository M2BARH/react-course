import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const handleChange = (id, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]: parseFloat(value) || 0,
    }));
  };

  return (
    <>
      <Header />
      <UserInput inputs={inputs} onChange={handleChange} />
      <Results inputs={inputs} />
    </>
  );
}

export default App;
