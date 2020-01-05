// import React, { Component } from 'react';
import React from 'react';
import './style.css';

const Education = (props) => (
      <div className="education-box d-inline-block">
        <div id="logo">
          <img className="img-fluid float-left logo-img" src={process.env.PUBLIC_URL + props.img} alt={props.school}></img>
        </div>
        <p>{props.school}, {props.city}</p>
        <p>{props.description} - {props.year}</p>
      </div>   
    )

export default Education;