import Head from "next/head";
import Player from "./Player"
import { useState } from "react";
export default function Home() {

 const [currentSongIndex, setCurrentSongIndex] = useState(0);
 const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
 return (
   <div>
     <head>
       <title>Music Application</title>
       <meta name="keywords" content="music, streaming, entertainment"></meta>
     </head>
     <h1>components here</h1>
     <Player
       song={songs[currentSongIndex]}
       nextSong={songs[nextSongIndex]}
     />
   </div>
);
}