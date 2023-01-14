import React, { useState, useEffect } from "react";
import "./TestComponent.css"

function TestComponent (props:{name:String}){

const [age, setAge] = useState(22)    

useEffect(()=>{
console.log("Componente atualizar"+age)
},[age])

return(
  <div className="test-component">Olá {props.name} idade {age}Test Component
  <button onClick={()=>{setAge(age+1)}}>idade ++</button>
  
  </div>
  )
}

export default TestComponent