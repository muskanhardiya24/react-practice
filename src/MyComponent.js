import { useState } from "react"

const MyComponent = (props) =>
{
        const [counter, setCounter] = useState(1)
        const [myString, setMyString] = useState("Default")
        const [object, setObject] = useState({
            key1: "This is property's value",
            Key2: 2,
            Key3: true,
            Key4: [{}],
            Key5: {}
        })

         let count = 0
        console.log("props:", props)
        console.log("Color:", props.color)

         const incrementCounter = () =>
         {
            setCounter(counter+1)
         } 
          const increment = () =>
          {
            count = count+1
            console.log("count: ", count)
          }
        

        return <div> 
                <h1>Functional Component</h1>
                Hello React from class  <br/>
                Color: <lable style={{backgroundColor: props.color}}>{props.color}</lable>
                -------------- 
                <div>
                    count: {count}
                    <br/>
                    <button onClick={increment}>increment</button>
                    <br/>   
                    Counter: {counter}
                    <br/>
                   <button onClick={incrementCounter} >Update counter</button>
                </div>
                 </div>
    
}

export default MyComponent