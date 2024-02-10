import "./inputForm.css"
import {useState} from "react"

export default function InputForm({onInputChange}){
    const [values, setValues] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: null,
    });

    const inputChangeHandler = (event) => {
        const {name, value} = event.target;
        setValues((prevInput)=>({
            ...prevInput,
            [name]: +value,
        }));
    }
    
    onInputChange(values);

    return(
        <div className="wrapInputs">
            <div className="inputContainer">
                <div className="singleField">
                    <label>INITIAL INVESTMENT</label>
                    <input type="number" name="initialInvestment" onChange={inputChangeHandler} required />
                </div>
                <div className="singleField">
                    <label>ANNUAL INVESTMENT</label>
                    <input type="number" name="annualInvestment" onChange={inputChangeHandler} required />
                </div>
                <div className="singleField">
                    <label>EXPECTED RETURN</label>
                    <input type="number" name="expectedReturn" onChange={inputChangeHandler} required />
                </div>
                <div className="singleField">
                    <label>DURATION</label>
                    <input type="number" value={values.duration} name="duration" onChange={inputChangeHandler} required />
                </div>
            </div>
        </div>
    );
}