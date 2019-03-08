import React from "react";
import PropTypes from "prop-types";

const Students = props => {
  return (
    <div>
      <h1>{props.groupName}</h1>
      <h3>The students are:</h3>
      {props.names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
};

/*
        Go into the Students component and add support for an optional prop
        called "groupName". Send a string of your choice and display it above 
        the list of students
      */

Students.propTypes = {
  names: PropTypes.array.isRequired,
  groupName: PropTypes.string
};

export default Students;
