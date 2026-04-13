import { useState } from "react"

const Counter = () => {
    // let count = 0

    /*
        State
        - variables in React that we expect to change
        - useState() - React hook that gives us access to state

        - Hooks are React functions that allow us to "hook into" React's internal features

        *note that the following is NOT an array, we are destructuring
        - const[stateVariable, setStateVariableFunction] = useState(intialValue/defaultValue)

        - stateVariable - variable that keeps track of the current value of our state
        - setStateVariableFunction - function that modifies the state variable. this is the ONLY way to modify the state variable. whatever you pass inside the setStateVariableFunction will become the new value of the state. usually state variables should be const even if we are going to change it, it's convention

        - when the state is modified, the component will re-render and the new changes will be present in the UI

        - setStateFunctions are asynchronous! meaning after changing the state, don't expect to have access to that updated value right away

        - typically want to run setStateFunctions at the end, it's the last thing we do with the stateVariable, other functions or changes are fine
    */

    /*
        count - stateVariable
        setCount - setStateVariableFunction
        0 - default/initial value
        
        const [STATE_NAME, setSTATE_NAME]
    */
    const [count, setCount] = useState(0)

    const addOne = () => {
    
        // count++

        // setCount replaces our variable with the value of whatever is in the parenthesis
        setCount(count + 1)
        // console.log(count)
    }

    const subtractOne = () => {

        if (count > 0) {
            setCount(count-1)
        }
    }

  return (
    <>
        <h2>Counter: {count}</h2>
        <button onClick={addOne}>+1</button>
        <button onClick={() => setCount(count+2)}>+2</button>
        <button onClick={subtractOne}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

export default Counter