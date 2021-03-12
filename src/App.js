import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import EmployeeCard from "./components/EmployeeCard";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import employee from "./employee.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employee
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron />
        <Search />
        {this.state.employee.map((employee) => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            email={employee.email}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
