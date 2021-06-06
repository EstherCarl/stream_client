import MyChats from './components/chat/myChats'
import Viewers from "./components/chat/Viewers";
// import Chat from './fromTovi/chat'
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
{/* <script src="https://maxcdn.bootstrapcdn.com/bootstrap"></script> */ }
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
const App = () => {
  return (

    <div className="App" style={{backgroundColor:"gray", height:"700px"}}>
      <header className="App-header">
        <MyChats></MyChats>
        <Viewers></Viewers>

        {/* </MyChats> */}
        {/* <Chat></Chat> */}
      </header>
    </div>

  )
}

export default App

