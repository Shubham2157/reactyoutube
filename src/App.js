import './App.css';
import React from 'react'
import ReactPlayer from 'react-player'

function App() {
  // npm install react-player
  // https://github.com/cookpete/react-player
  return (
    <div className="App">
    <ReactPlayer 
    controls
    loop
    pip
    playIcon
    url='https://www.youtube.com/watch?v=r4b1sAURS9M&ab_channel=BollywoodHitsSongs' />
    </div>
  );
}

export default App;
