import React from "react";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovie,deleteMovie,updateMovie } from "../Features/Users";
import { useNavigate } from "react-router-dom";
function Admin(){

    const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const navigate=useNavigate()
  const [name, setName] = useState("");
  const [genres, setGenres] = useState("");
    return(
        <>
        
        <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
          
        />
        <input
          type="text"
          placeholder="Gerne..."
          onChange={(event) => {
            setGenres(event.target.value);
          }}
        />
        
        <button className="btn btn-primary"
          onClick={() => {
            dispatch(
              addMovie({
                id: userList[userList.length - 1].id + 1,
                name,
                genres,
              })
            );
          }}
        >
          {" "}
          Add Movie
        </button>
        <button className="btn btn-primary"
          onClick={()=> navigate('/customer')}
        >
          {" "}
          Show Customer View
        </button>
      </div>
      <div className="container movieCard">
        {userList.map((user) => {
          return (
            <div class="card w-75 movieCard">
            <div class="card-body">
              <h5 class="card-title">{user.name}</h5>
              <p class="card-text">{user.genres}</p>
              
               
              <button className="btn btn-danger"
                onClick={() => {
                  dispatch(deleteMovie({ id: user.id }));
                }}
              >
                Delete Movie
              </button>
            </div>
          </div>
            
          );
        })}
      
      </div>
      </>
    )
}

export default Admin