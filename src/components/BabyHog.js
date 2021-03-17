import React, { useState } from "react";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";


// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`
function BabyHog({name, hobby, color}) {

  const [weight, setWeight] = useState(50)
  function handleChangeWeight(e) {
    if(e.target.name === '+'){
      setWeight(weight+5)
    }
    else
    {setWeight(weight-5)}
  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight:{weight}</h3>
      <h3>{hobby}</h3>
      <h4>Eye Color:{color}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={color === "blue" ? BlueBaby : (color === "sun" ? SunBaby : GlowingBaby)}
          style={{ height: `${200 * weight/50}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
