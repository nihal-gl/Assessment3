import React from "react";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser,deleteUser,updateUsername } from "../Features/Users";
function Customer(){

    
  const userList = useSelector((state) => state.users.value);

  
    return(
        <>
        
       
      <div className="container movieCard">
        {userList.map((user) => {
          return (
            
        <div class="card w-75 movieCard">
            <div class="card-body">
              <h5 class="card-title">{user.name}</h5>
              <p class="card-text">{user.genres}</p>
            </div>
          </div>
          );
        })}

      
      </div>
      </>
    )
}

export default Customer