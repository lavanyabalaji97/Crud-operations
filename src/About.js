import React, { Component } from "react";


class About extends Component{
    state={
        count:0
    }


     handler=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
            <h1>{this.props.name}</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.handler}>click</button>
            </div>
        )
    }
}
export default About;