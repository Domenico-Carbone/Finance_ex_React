import Header from "./components/Header"
import InputForm from "./components/InputForm"
import TableDate from "./components/TableDate"
import {useState} from "react"

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const handleInputChange = (newValues) => {
    setInputValues(newValues);
  };

  return (
    <>
      <Header />
      <InputForm onInputChange={handleInputChange} />
      <TableDate inputValues={inputValues} />
    </>
  )
}

export default App;
