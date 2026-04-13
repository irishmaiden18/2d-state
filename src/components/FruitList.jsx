import { useState } from "react"

const FruitList = () => {
    const [fruitList, setFruitList] = useState([
        { id: 1, name: "Orange", size: "medium" },
        { id: 2, name: "Mango", size: "small" },
        { id: 3, name: "Apple", size: "large" },
    ])

    const addFruit = (fruit) => {
        console.log(fruit)

        /* 
            add item to state arrays in React:
            - fruitList contains all of the current items in our list
            - fruit is the new item we want to add
            - ...fruitList (spread operator) takes our array and gives us access to a groupd of individual items
            - [...fruitList] - copy over all existing items to new array
            - [...fruitList, fruit] - adds fruit to the end of that array

            formula:
            - setSTateFunction([...stateArray, newItem])
        */
        setFruitList([...fruitList, fruit])
    }

    const removeFruit = (id) => {
        console.log(id)

        /* 
            delete from array stat in react:
            - use filter
            - remove item from fruitlist whose id matches the parameter
            - our filter should check all items and add the ones whose ids do NOT equal our parameter id to the results array, leaving out the item whose id does match the parameter
            

        */
        const results = fruitList.filter((item) => item.id !== id)
        setFruitList(results)
    }

  return (
    <>
        <h2>FruitList</h2>
        <ul>
            {fruitList.map((fruit, index) => (
                <li key={index}>
                    Fruit: {fruit.name} - Size: {fruit.size}
                    <button onClick={() => removeFruit(fruit.id)}>Remove</button>
                </li>
            ))}
        </ul>
        <button onClick={() => addFruit({id: 4, name: "pineapple", size: "medium"})}>Add Fruit</button>
    </>
  )
}

export default FruitList