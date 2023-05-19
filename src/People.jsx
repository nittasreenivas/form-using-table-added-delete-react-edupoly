import { useState } from "react";
export default function People() {
  var people = [
    {
      firstname: "praveen",
      lastname: "gubbala",
      age: 36,
      gender: "male",
      city: "hyd",
      salary: 10000
    },
    {
      firstname: "srikanth",
      lastname: "gubbala",
      age: 32,
      gender: "male",
      city: "bengaluru",
      salary: 20000
    },
    {
      firstname: "pradeep",
      lastname: "reddy",
      age: 21,
      gender: "male",
      city: "hyd",
      salary: 25000
    },
    {
      firstname: "mounika",
      lastname: "mudiraj",
      age: 20,
      gender: "female",
      city: "nalgonda",
      salary: 30000
    },
    {
      firstname: "nikhil",
      lastname: "m",
      age: 22,
      gender: "male",
      city: "guntur",
      salary: 2000
    },
    {
      firstname: "riya",
      lastname: "bhadouria",
      age: 14,
      gender: "female",
      city: "indore",
      salary: 40000
    }
  ];
  console.log("people:", people);
  const [person, setPerson] = useState(people);
  const [addPerson, setAddPerson] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    city: "",
    salary: ""
  });
  const handleFirstname = () => {
    let temp = [...person];
    temp.sort((a, b) => {
      if (a.firstname > b.firstname) {
        return 1;
      } else {
        return -1;
      }
    });
    setPerson([...temp]);
  };
  const handlelastname = () => {
    let temp = [...person];
    temp.sort((a, b) => {
      if (a.firstname > b.firstname) {
        return -1;
      } else {
        return 1;
      }
    });
    setPerson([...temp]);
  };
  const handleDelete = (i) => {
    alert(i);
    let temp = [...person];
    temp.splice(i, 1);
    setPerson([...temp]);
  };
  const handleFirstnameInput = (e) => {
    setAddPerson({ ...addPerson, firstname: e.target.value });
  };
  const handleLastnameInput = (e) => {
    setAddPerson({ ...addPerson, lastname: e.target.value });
  };
  const handleAgeInput = (e) => {
    setAddPerson({ ...addPerson, age: e.target.value });
  };
  const handleGenderInput = (e) => {
    setAddPerson({ ...addPerson, gender: e.target.value });
  };
  const handleCityInput = (e) => {
    setAddPerson({ ...addPerson, city: e.target.value });
  };
  const handleSalaryInput = (e) => {
    setAddPerson({ ...addPerson, salary: e.target.value });
  };
  const addNewPersonFromInput = () => {
    setPerson([...person, { ...addPerson }]);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter firstname"
          onChange={handleFirstnameInput}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="enter lastname"
          onChange={handleLastnameInput}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="enter age"
          onChange={handleAgeInput}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="enter gender"
          onChange={handleGenderInput}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="enter city"
          onChange={handleCityInput}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="enter salary"
          onChange={handleSalaryInput}
        />{" "}
        <br />
        <button onClick={addNewPersonFromInput}> add</button>
      </div>
      <div>
        <table border="2" cellPadding="10px">
          <thead>
            <th onClick={handleFirstname}> FirstName</th>
            <th onClick={handlelastname}> LastName</th>
            <th>age</th>
            <th> gender</th>
            <th> city</th>
            <th>salary</th>
            <th> Delete</th>
          </thead>
          <tbody>
            {person.map((p, i) => {
              const { firstname, lastname, age, gender, city, salary } = p;
              return (
                <tr key={i}>
                  <td>{firstname} </td>
                  <td>{lastname} </td>
                  <td>{age}</td>
                  <td> {gender} </td>
                  <td>{city} </td>
                  <td>{salary} </td>
                  <td>
                    <button onClick={() => handleDelete(i)}> del</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
