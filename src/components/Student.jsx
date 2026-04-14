import { useState } from "react"

const Student = () => {

    const [student, setStudent] = useState ({
        studentId: 1001, 
        name: "Jimmy React", 
        major: "Computer Science", 
        year: "Junior"})

    const updateYear = () => {
        // change student's year to senior
        // create a clone of the existing object with destructuring then we can update the properties as needed
        // {...stateObject, propertiesToUpdate}
        setStudent({...student, year: "Senior", major: "Computer Engineer", clubs: 2})
    }

  return (
    <>
        <h2>Student Component</h2>
        <h4>Name: {student.name}</h4>
        <p>Major: {student.major}</p>
        <p>Year: {student.year}</p>
        {/* if student.clubs exists, display the following */}
        {student.clubs && <p>This student is in {student.clubs} club(s)</p>}
        <button onClick={updateYear}>Update Year</button>
    </>
  )
}

export default Student