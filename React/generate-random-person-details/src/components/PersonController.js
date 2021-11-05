import React, { useEffect, useState } from "react";
import Person from "./Person";


function PersonController (props) {
    const [person, setPerson] = useState(null);
    const personFirstName = person ? person.results[0].name.first : undefined;
    const personLastName = person ? person.results[0].name.last : undefined;
    const personEmail = person ? person.results[0].email : undefined;

    function getPerson () {
    fetch("https://www.randomuser.me/api?results=1")
    .then(personData => personData.json())
    .then(personData => setPerson(personData))
    }

    useEffect(getPerson , []);

    console.log(person)
    return (
        <>
           <Person fName={personFirstName} lName={personLastName} email={personEmail} />
        </>
    )
}
 
export default PersonController;