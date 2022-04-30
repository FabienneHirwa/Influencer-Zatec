import React from "react";
import './body.css';
import db from '../db.json'
import Follow from "./follow";
function Body() {
    return ( 
      <div>
      <div id="container">
        {
          db.map((value)=>{
            return (
              <div className="row " id="user_card" >
              <div className="col-2" >
                <img  src={value.profilePicture} alt="image"/>
              </div>
              
              <div className="col">
              <h2>@{value.username}</h2>
              <p id="biography">{value.biography}</p>
              </div>
              <div className="col-3">
              <Follow />
              </div>
            </div>
            )
          })
        }
      </div>
      

      </div>
    );
  }
      
      
    
    export default Body;
