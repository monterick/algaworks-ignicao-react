import React from "react"
import './Button.css'

declare interface ButtonProps{
  content?:String
  children?:String
  appendIcon?: JSX.Element
  onClick?: ()=>void
}

const Button:React.FC<ButtonProps> = (props) =>{
    return(
        <button className="AppButton" onClick={props.onClick}>
            {props.children ||"Unless name"}
            {props.appendIcon}
            </button>
    )
}

export default Button