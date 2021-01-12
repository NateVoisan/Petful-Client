import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Description from "../components/Description";
import PetInfo from "../components/PetInfo";
import Context from "../ApiContext.jsx";
import config from "../config";
import "./Root.css";

function Root() {
  const [people, setPeople] = useState([]);
  const [cat, setCat] = useState({});
  const [dog, setDog] = useState({});
  const [person, setPerson] = useState("");

  useEffect(() => {
    fetch(`${config.API_ENDPOINT}/pets/dog`).then((res) => {
      if (res.ok)
        return res.json().then((data) => {
          setDog(data.data);
          // console.log(data, "setDog console")
        });

      throw res.statusText;
    });

    fetch(`${config.API_ENDPOINT}/pets/cat`).then((res) => {
      if (res.ok)
        return res.json().then((data) => {
          setCat(data.data);
          // console.log(data, "setCat console")
        });

      throw res.statusText;
    });

    // fetch(`${config.API_ENDPOINT}/pets/cat`)
    // .then((res)=> {
    //   if(res.ok)
    //     return res.json()
    //     .then((data) => {
    //       setCat(data)
    //     })
    //     .catch(() => {
    //       res.text()
    //       .then((data)=>{
    //         setCat(data)
    //       })
    //     })
    //   throw(res.statusText)
    // })

    Promise.all([fetch(`${config.API_ENDPOINT}/people`)])
      .then(([peopleRes]) => {
        if (!peopleRes.ok)
          return peopleRes.json().then((e) => Promise.reject(e));

        return Promise.all([
          peopleRes.json(),
          // console.log(people, "people console"),
        ]);
      })
      .then(([people]) => {
        setPeople(people.data);
      })
      .catch((error) => console.error({ error }));
    // }, [people, dog, cat]);
  }, []);

  function addName(name) {
    fetch(`${config.API_ENDPOINT}/people`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ person: name }),
    })
      .then(() => {
        setPeople([...people, name]);
      })
      .catch((e) => console.error(e));
  }

  function addSelf(name) {
    setPerson(name);
  }

  function remove(type = null) {
    let pet;
    if (type) {
      pet = type;
    } else {
      const c = Object.keys(cat).length;
      const d = Object.keys(dog).length;
      pet = Math.floor(Math.random() * 2) ? "cat" : "dog";
      if (c === 0 && d === 0) return;
      if (c === 0) pet = "dog";
      if (d === 0) pet = "cat";
    }

    Promise.all([
      fetch(`${config.API_ENDPOINT}/people`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      fetch(`${config.API_ENDPOINT}/pets/${pet}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    ])
      .then(([personRes, petRes]) => {
        if (!personRes.ok)
          return personRes.json().then((e) => Promise.reject(e));
        if (!petRes.ok) return personRes.json().then((e) => Promise.reject(e));
        return Promise.all([
          // personRes.json(),
          petRes.json(),
        ]);
      })
      .then(([petRes]) => {
        setPeople(people.slice(1));
        pet === "cat" ? setCat(petRes) : setDog(petRes);
      })
      .catch((e) => console.error(e));
  }

  const value = {
    people,
    cat,
    dog,
    person,
    addName,
    remove,
    addSelf,
  };
  return (
    <Context.Provider value={value}>
      <div>
        <h1>Petful</h1>
        <Route exact path="/" component={Description} />
        <Route exact path="/pets" component={PetInfo} />
      </div>
    </Context.Provider>
  );
}

export default Root;
