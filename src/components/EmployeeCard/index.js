import React from "react";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          {/* <li>
            <strong>image:</strong> {props.image}
          </li> */}
          <li>
            <strong>Location:</strong> {props.location}
          </li>
          <li>
            <strong>email:</strong> {props.email}
          </li>
        </ul>
      </div>
     
    </div>
   

  );
}

export default EmployeeCard;
