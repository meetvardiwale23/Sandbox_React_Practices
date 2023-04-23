import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [getFormData, setFormData] = useState([
    {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      gender: "",
      dob: "",
      acheivements: [{ Achievements: "" }]
    }
  ]);

  // another example of achevement
  const [getAchievement, setAchievement] = useState([{ newAchievement: "" }]);

  const getValues = (e) => {
    console.log("inside the on chang");

    const setObject = {
      ...getFormData,
      [e.target.name]: e.target.value
    };
    setFormData(setObject);
  };

  const addMore = () => {
    setFormData([
      {
        ...getFormData[0],
        acheivements: [...getFormData[0].acheivements, { Achievements: "" }]
      }
    ]);
    //setFormData([...[getFormData[0].acheivements], { Achievements: "" }]);
  };
  const addMoreAchive = () => {
    setAchievement([...getAchievement, { newAchievement: "" }]);
  };
  console.log(getAchievement);

  const remove = (i) => {
    console.log("i", i);
    const removeElement = [
      ...getFormData[0].acheivements,
      { Achievements: "" }
    ];
    removeElement.slice(i, 1);
    console.log([{ removeElement }]);
  };

  const removeAchieve = (i) => {
    const removeElementAchieve = [...getAchievement];
    removeElementAchieve.slice(i, 1);
    setAchievement(removeElementAchieve);
  };

  console.log("getForm data[0]", getFormData);
  return (
    <div className="App">
      <h1>Form validation</h1>
      <label>
        First Name :
        <input
          className="firstname"
          name="firstName"
          type="text"
          placeholder="Enter your name"
          value={getFormData.firstName}
          onChange={getValues}
        />
      </label>

      <label>
        Last Name :
        <input
          type="text"
          placeholder="Enter the name"
          name="lastName"
          value={getFormData.lastName}
          onChange={getValues}
        />
      </label>

      <label>
        Phone Number :
        <input
          type="number"
          placeholder="Enter the name"
          name="phoneNumber"
          value={getFormData.phoneNumber}
          onChange={getValues}
        />
      </label>

      <label>
        Email :
        <input
          type="email"
          placeholder="Enter the name"
          name="email"
          value={getFormData.email}
          onChange={getValues}
        />
      </label>

      <label>
        Male
        <input
          type="radio"
          name="gender"
          value="male"
          checked={getFormData.gender === "male"}
          onChange={getValues}
        />
      </label>

      <label>
        Female
        <input
          type="radio"
          name="gender"
          value="female"
          checked={getFormData.gender === "female"}
          onChange={getValues}
        />
      </label>

      <label>
        Other
        <input
          type="radio"
          name="gender"
          value="other"
          checked={getFormData.gender === "other"}
          onChange={getValues}
        />
      </label>

      <label>
        D.O.B
        <input
          type="date"
          name="date"
          value={getFormData.dob}
          onChange={getValues}
        />
      </label>
      <button onClick={addMore}>Add more</button>

      {getFormData.map((item, i) => (
        <div>
          <label>
            Your Achievements :
            <input
              type="text"
              name="acheivements"
              id={getFormData}
              placeholder="Achievements"
              value={getFormData.acheivements}
              onChange={getValues}
            />
          </label>
          <button onClick={() => remove(i)}>Remove</button>
        </div>
      ))}

      <button onClick={addMoreAchive}>Add more Achievements</button>
      {getAchievement.map((item, i) => (
        <div>
          <label>
            Your Achievements :
            <input
              type="text"
              name="acheivements"
              placeholder="Achievements"
              value={getAchievement.newAchievement}
              onChange={getValues}
            />
          </label>
          <button onClick={() => removeAchieve(i)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
