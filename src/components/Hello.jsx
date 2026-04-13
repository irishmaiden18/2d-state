import { useState } from "react"

const Hello = () => {

    // create a name state
    // when using strings, if you don't have a particular default/initial value, just use an empty string
    const [name, setName] = useState("Rob")

    // add a button that changes the name state to "Jeff"

    // write a functon handleNameChange that changes the name to whatever parameter was passed in. the name cannot be blank, if it is alert the user
    const handleNameChange = (newName) => {

        if (newName === "") {
            alert ("Name CANNOT be Blank")
        } else {
            setName(newName)
        }
        
    }

    // add a button that ads an ! to the end of our name string whenever the button is clicked
    const addExclamation = () => {

        setName(name + "!")
    }

  return (
    <>
    <div>Hello {name}</div>
    <button onClick={() => setName("Jeff")}>Change Name</button>
    <button onClick={() => handleNameChange("Ryan")}>Change Name 2</button>
    <button onClick={addExclamation}>Add Exclamation</button>

    </>
  )
}

export default Hello