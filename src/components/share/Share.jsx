import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import { useState } from "react";

export default function Share() {

  const [file, setFile]= useState(null)
  
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/asset/personas/rafa.png" alt="" />
          <input
            placeholder='"¿Qué café estás tomando ?"'
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <label htmlFor= "file" className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Foto o video</span>
                    <input style={{display : "none"}}
                      type="file" 
                      id="file" 
                      accept=".png, .jpeg, .jpg" 
                      onChange={(e)=>setFile(e.target.files[0])}/>
                </label>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Etiqueta</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Localización</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Sentimientos</span>
                </div>
            </div>
            <button className="shareButton">compartir</button>
        </div>
      </div>
    </div>
  );
}