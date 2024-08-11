import React from "react";
import './App.css';

export default function Profile(props) {
  return (
    <div className="profile">
      <div className="logo-div">
        <img src={props.ProfilePicture} alt={props.UniversityName} className="profile-picture" />
      </div>
      
      <div className="logo-data">
          <h1 className="UniversityName">{props.UniversityName}</h1>
          <h3 className="Province">{props.Province}</h3>
          <h4 className="Place">{props.Place}</h4>
          <h5 className="Moto">{props.Moto}</h5>
          
            <a href={props.Link} target="_blank" rel="noopener noreferrer" className="Link">
              Visit Website
            </a>
      </div>
      
     
    </div>
  );
}
