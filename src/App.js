import "./styles.css"
import { useState } from 'react';

function App() {

  const[age, setAge]=useState(null)
  const[height, setHeight]=useState(null)
  const[weight, setWeight]=useState(null)
  const[bmr, setBmr]=useState(null)
  const[mBmr, setMBmr]=useState(null)

  const handleSubmit=(e)=> {
    e.preventDefault();
    const ages=e.target.age.value;
    const cm=e.target.height.value;
    const lb=e.target.weight.value;
    setBmr(Math.round(655+(4.35*weight)+(4.7*height)-(4.7*age)))
    setMBmr(Math.round(66 + (6.23*weight)+(12.7*height)-(6.8*age)))
  };
  return (
    <div className="output">
      <div className="title">
        This is a BMR Calculator
      </div>
      <div className="description">
        Basal metabolic rate is the amount of resting
        calories you burn every day. <br></br>
        This value varies based on different factors including gender, weight, age and height.
      </div>
    <form onSubmit={handleSubmit}>
      <div className="heightWeight">
        <input type="text" name="age" placeholder="age" onChange={(e)=> {setAge(e.target.value);}}/> yr
        <br></br>
        <input type="text" name="height" placeholder="height(in)" onChange={(e)=> {setHeight(e.target.value);}}/> in
        <br></br>
        <input type="text" name="weight" placeholder="weight(lb)" onChange={(e)=> {setWeight(e.target.value);}}/> lb
        <br></br>
        <button>Calculate</button>
      </div>
      <h2>Estimated BMR:</h2>
     <h3> Male: {mBmr} calories/day<br></br>
      Female: {bmr} calories/day</h3>
      </form>
    </div>
  )
}

export default App;
