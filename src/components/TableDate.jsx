import "./TableDate.css"
import {calculateInvestmentResults} from "../util/investment"
import {formatter} from "../util/investment"


export default function TableDate({inputValues}){
    console.log(inputValues)
    const totValues = calculateInvestmentResults(inputValues);

    let totalInterest = 0;

    const tableContent = totValues.map((value) => {
        totalInterest += value.interest;
        return (
          <tr key={value.year}>
            <td>{value.year}</td>
            <td>{formatter.format(value.valueEndOfYear)}</td>
            <td>{formatter.format(value.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(value.valueEndOfYear - totalInterest)}</td>
          </tr>
        );
      });

    return(
        <div className="tableContainer">
            {totValues.length > 0 ?
            <table>
                <tr>
                    <th>year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
                {tableContent}
            </table> : <h2>Please enter a duration greater than zero.</h2>}
        </div>
    );
}