import React from "react";

class MyComponentClass extends React.Component
{ 
    counter = 0
    state = {count: 0}
    

    constructor(props)
    {
         super(props)
         console.log("constructor of MyComponentClass");
    }


    static getDerivedStateFromProps()
    {
        console.log("getDerivedStateFromProps");
    }


    shouldComponentUpdate()
    {
        console.log("shouldComponentUpdate")
        return true
    }

    increment = () =>
    {
        //this.state.count = this.state.count+1
        this.setState({count: this.state.count+1})
        console.log("count:", this.state.count)
    }

    incrementCounter = () =>
    {
        this.counter += 1
    }

    render()
    {
        console.log("render");
        console.log("Class props: ", this.props)
        return <div> 
            <h1>class Component</h1>
            Hello React from class  <br/>
             color: <label style={{backgroundColor: this.props.color}}>
                {this.props.color}</label>
            -------------- 
            <br/>
            <button onClick={this.props.onClick}>Click me</button>
            <br/>
        <div>
        
        count: {this.state.count}
        <button onClick={this.increment}>Increment</button>
        </div>


        <div>
        
        Counter: {this.counter}
        <button onClick={this.incrementCounter}>Increment Counter</button>
        </div>
    </div>

        
    }

    getSnapshotBeforeUpdate(preProps, prevState)
    {
       console.log(" getSnapshotBeforeUpdate")
       console.log(",preProps:", preProps)
       console.log("this.props:", this.props)

       console.log("preState:", prevState)
       console.log("this.state:", this.state)
       return true
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate");
    }


    componentDidMount()
    {
        console.log("componentDidMount");
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount");
    }

}

export default MyComponentClass
