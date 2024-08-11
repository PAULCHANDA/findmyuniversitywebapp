import React from "react";
import Profile from "../Profile";
import UniversityData from "./UniversityData";

export default function University() {
  const myUniversity = UniversityData.map((uni, index) => {
    return(
      <Profile 
          key={index}
          ProfilePicture={uni.ProfilePicture}
          UniversityName={uni.UniversityName}
          Province={uni.Province}
          Place={uni.Place}
          Link={uni.Link}
          Moto={uni.Moto}
        />
    )
  });

  return(
    <div>
      {myUniversity}
    </div>
  )
  
}
