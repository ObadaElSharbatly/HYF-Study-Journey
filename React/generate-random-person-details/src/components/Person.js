import React from "react";

function Person({ personInfo }) {
  return (
    <>
      {personInfo && personInfo.length > 0 && (
        <ul>
          {personInfo.map((info, i) => {
            return (
              <li key={i}>
                {info.title}: {info.info}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Person;
