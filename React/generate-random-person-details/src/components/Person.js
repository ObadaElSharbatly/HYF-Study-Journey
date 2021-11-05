import React from 'react'

function Person ({fName, lName, email}) {


    return (
        <>
            {
                fName && lName && email &&

                <ul>
                    <li>First name: {fName}</li>
                    <li>Last name: {lName}</li>
                    <li>Email: {email}</li>
                </ul>
            }
        </>
    )
}
 
export default Person;