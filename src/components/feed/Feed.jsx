import "./feed.css";
import Post from "../post/Post.jsx";
import Share from "../share/Share";
// import { Posts } from "../../dummyData";
import React ,{ useEffect, useState} from 'react';
// import { Person } from "@material-ui/icons";

export default function Feed() {
  
  const url ='http://localhost:4000/poster'
  const [datos, setDatos]= useState([])

  const fetchData = async()=>{
    const response =await fetch(url) 
    const responseJSON = await response.json()
    setDatos(responseJSON)
    console.log(responseJSON)
    console.log(datos)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {datos.map(p => (  
          <Post key={p._id} post={p} />                        
        ))}
        
      </div>
    </div>
  );
}