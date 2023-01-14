import React from 'react'

class ClassComponent extends React.Component<{name:String}>{

  
    constructor(props: any){
        super(props);
        console.log("constructor")
    }

    state = {
       name:"Mundo"
    }

    componentDidMount(){
        console.log("Did mount")
    }

    componentDidUpdate(){
        console.log("update")
    }

    render(){
        console.log("render2")
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