import React, { useEffect, useState } from "react";
import Person from "./Person";

function PersonController() {
  const [person, setPerson] = useState(null);
  const [personInfo, setPersonInfo] = useState([]);
  const [networkError, SetNetworkError] = useState(null);

  function getPerson() {
    fetch("https://www.randomuser.me/api?results=1")
      .then((personData) => personData.json())
      .then((personData) => {
        if (personData.error) {
          SetNetworkError(personData.error);
          throw new Error(personData.error);
        } else {
          setPerson(personData);
          return personData;
        }
      })
      .then((personData) =>
        setPersonInfo([
          {
            info: personData.results[0].name.first
              ? personData.results[0].name.first
              : "--",
            title: "First Name",
          },
          {
            info: personData.results[0].name.last
              ? personData.results[0].name.last
              : "--",
            title: "Last Name",
          },
          {
            info: personData.results[0].email
              ? personData.results[0].email
              : "--",
            title: "Email",
          },
          {
            info: personData.results[0].phone
              ? personData.results[0].phone
              : "--",
            title: "Phone Number",
          },
         
        ])
      )
      .catch((error) => {
        SetNetworkError(
          error.error
        );
        console.log(error);
      });
  }

  useEffect(getPerson, []);

  return (
    <>
      {networkError ? (
        networkError
      ) : personInfo.length !== 0 ? (
        <Person personInfo={personInfo} />
      ) : (
        "loading ..."
      )}
    </>
  );
}

export default PersonController;
