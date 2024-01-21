import { calculateInvestmentResults, formatter } from "../util/investment";

export default ({ inputs }) => {
  const investmentResults = calculateInvestmentResults(inputs);
  console.log(investmentResults);
  const initialInvestment =
    investmentResults[0]?.valueEndOfYear -
    investmentResults[0]?.interest -
    investmentResults[0]?.annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>investment value</th>
          <th>interest (year)</th>
          <th>total interest</th>
          <th>invested capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults &&
          investmentResults.map((result) => {
            const totalInterest =
              result.valueEndOfYear -
              result.annualInvestment * result.year -
              initialInvestment;
            const investedCapital = result.valueEndOfYear - totalInterest;

            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
