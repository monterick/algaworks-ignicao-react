import React from 'react'

class ClassComponent extends React.Component<{name:String}>{

  

    state = {
       name:"Mundo"
    }

    render(){
        return(
            <div>
                Component { this.props.name } Baseado em classe
             <p>{this.state.name}</p>   
            <button onClick={()=>this.setState({name:"Ricardo"})}>AlterarEstado</button>
            </div>
        )
    }

}

export default ClassComponent