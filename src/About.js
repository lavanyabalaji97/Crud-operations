import { useState } from "react";

const initstate=["sameera","reddy"]

function About(){
   
    const [person,setPerson]=useState(initstate);
    const handleClick=()=>{
        // person.push("lavanya")
        // person.push("Naidu")
        // setPerson(person);
        const newPerson=[...person]
        newPerson.push("lavanya")
        newPerson.push("Naidu")
        setPerson(newPerson)

    }
    return(
     <div>
    <button onClick={handleClick}>click</button>
    {
        person.map((item)=>{
            <li key={item}>{item}</li>
        })
    }

     </div>
     
     
    )
}
export default About;