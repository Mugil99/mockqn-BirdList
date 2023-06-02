import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {
const[birdArr,setBirdArr]=useState([]);
const[bird,setBird]=useState("");
const addBird=()=>{
    
    setBirdArr([...birdArr,{name:bird,likes:0}]);
    setBird("");
    
}
const incLikes=(index)=>{
     const updatedBirdArr= birdArr.map((flyer,idx)=>{
      if(idx===index){
           return {...flyer,likes:flyer.likes+1};
      }
      return flyer;
     })
     setBirdArr(updatedBirdArr);
}
  return (
  <div>
    <h1>Bird List</h1>
    <p>Add Bird</p>
    <input type="text" value={bird} onChange={e=>setBird(e.target.value)}></input>
    <button onClick={addBird}>Add</button>
    {
      birdArr.map((flyer,index)=>(
        <ul>
          <li >
            <strong>{flyer.name}</strong>
            <div>
             Likes:{flyer.likes}
             <button onClick={()=>{incLikes(index)}}>+</button>
            </div>
          </li>
        </ul>
      ))
    }
  </div>
  );
}

export default App;
