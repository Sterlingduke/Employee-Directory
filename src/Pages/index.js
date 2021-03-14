import React from "react";
import { useState, useEffect } from 'react';
import Jumbotron from "../components/Jumbotron/index";
import EmployeeCard from "../components/EmployeeCard/index";
import Search from "../components/Search/index";
import Wrapper from "../components/Wrapper/index";
// import employee from "./employee.json";
import API from "../utils/API";


// class Pages extends Component {
//   // Setting this.state.employees to the employees json array
//   state = {
//     employee
//   };

function Pages() {
  const [employeeState, setEmployeeState] = useState([]);

  useEffect(() => {
    API.fetchEmployees()
      .then(res => {

        // console.log(res.data.results);

        {setEmployeeState(res.data.results)}
      })
  }, []);

  return (
    <Wrapper>
      <Jumbotron />
      <Search />
      {employeeState.map(person => {
        return <EmployeeCard
          // id={person.id}
          key={person.email}
          name={person.name.first}
          image={person.picture.thumbnail}
          email={person.email}
          age={person.dob.age}
        />
      })}
    </Wrapper>
  );
}
    


export default Pages;