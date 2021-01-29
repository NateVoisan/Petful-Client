import React from "react";

export default function Pet(props) {
  const { pet } = props;

  function renderDesc() {
    if (typeof pet === "object" && Object.keys(pet).length > 1) {
      return (
        <div>
          <img src={pet.imageURL} alt={pet.name} width="400px" />
          <p>
            <strong>Name:</strong> {pet.name}
            <br />
            <strong>Gender:</strong> {pet.gender} <br />
            <strong>Age:</strong> {pet.age} <br />
            <strong>Breed:</strong> {pet.breed}
          </p>
          <p>
            <strong>About:</strong> {pet.story}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>{typeof pet === "string" ? pet : "loading..."}</p>
        </div>
      );
    }
  }
  return <>{renderDesc()}</>;
}
