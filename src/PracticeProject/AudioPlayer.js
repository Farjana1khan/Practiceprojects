import React from 'react'
import ReactPlayer from "react-player";
import './App.css';
export default function AudioPlayer() {
      return (
        <div className="App">
          <h3 className="player">
            Audio player in React -{" "}
           
          </h3>
          <ReactPlayer className="audio"
            url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
            width="400px"
            height="50px"
            
            playing={false}
            controls={true}
          />
        </div>
      );
}
