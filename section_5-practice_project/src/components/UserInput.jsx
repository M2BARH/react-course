import Inputs from "./Inputs";

export default ({ inputs, onChange }) => {
  return (
    <div id="user-input">
      <form>
        <div className="input-group">
          <Inputs
            label="initial investment"
            id="initialInvestment"
            value={inputs.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
          <Inputs
            label="annual investment"
            id="annualInvestment"
            value={inputs.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </div>
        <div className="input-group" id="bottom-group">
          <Inputs
            label="expected return"
            id="expectedReturn"
            value={inputs.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
          <Inputs
            label="duration"
            id="duration"
            value={inputs.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
