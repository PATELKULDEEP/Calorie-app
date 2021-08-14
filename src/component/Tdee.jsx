import React, { useState } from "react";
import "./tdee.css";
import { firestore } from "../firebase";


function Tdee() {
    const [fullname,setFullname] = useState(null)
  const [tdee, setTdee] = useState(null);
  const [weight, setWeight] = useState(0);
  const [bodyFat, setBodyFat] = useState(0);
  const [activityLevel, setActivityLevel] = useState(0);
  const [bmr,setBmr] = useState(0);

  const onSubmit = () => {
    const newBmr = 21.6* (weight - ((bodyFat/100)*weight)) + 370
    const newTdee = newBmr*activityLevel
    setTdee(Math.round(newTdee*1000)/1000)
    setBmr(Math.round(newBmr*1000)/1000)
  };
  const uploadData = () => {

    if(tdee&&bmr&&fullname != 0 ){
        
        firestore.collection("users").doc().set({
            fullname: fullname,
            tdee:tdee,
            bmr:bmr
        })
        .then(() => {
            alert("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }
    else{
        alert("Data Not Saved, Please Fill all the field")
    }

  }
  return (
    <div className="tdee">
      <h1>Total Daily Energy Expenditure</h1>
      <div className="tdee-button">

      </div>
      <div className="tdee-input">
          <div>
              <label >Name</label>
              <input type="text" placeholder="Full Name" onChange={(e) => setFullname(e.target.value)} />
          </div>
        <div>
          <label>Weight</label>
          <input
            type="number"
            placeholder="Weight in KG"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Body Fat</label>
          <input
            type="number"
            placeholder="Body Fat in percentage"
            onChange={(e) => setBodyFat(e.target.value)}
          />
        </div>

        <div>
          <label>Activity Level</label>
          <select onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="0" selected disabled hidden>
              Select an Option
            </option>
            <option value="1.2">Sedentary</option>
            <option value="1.375">Light Active</option>
            <option value="1.55">Moderately Active</option>
            <option value="1.725">Very Active</option>
            <option value="1.9">Extra Active</option>
          </select>
        </div>
        <div className="tdee-buttons">
          <button onClick={onSubmit}>Calculate</button> 
          <button onClick={uploadData}>Save Result</button>
        </div>
        <div>{tdee&&bmr ? <h3>TDEE : {tdee}   And   BMR : {bmr}</h3> : <h3> </h3>}</div>
      </div>
    </div>
  );
}

export default Tdee;
