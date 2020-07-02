import React from "react";
import style from './Recepie.module.css'
const Recepie = ({ title, calories, image,ingredients }) => {
 

  return (

    
    <div className={style.recepie}>
      <h1 >{title}</h1>
      <ol>
          {ingredients.map((ingredients , i ) =>(
              <li key={i}>{ingredients.text}</li>
          ))}
      </ol>
      <p>Calories : {calories}</p>
    <img src={image} className={style.image} alt="" /> 
    </div>
  );
};

export default Recepie;
