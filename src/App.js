import MyChats from './components/myChats'
import  ChatCard  from "./components/chatCard";
// import Chat from './fromTovi/chat'
import './App.css';
import React from 'react'

const App = () => {
  return (

    <div className="App">
      <header className="App-header">
        {/* <MyChats> */}
          <ChatCard></ChatCard>
        {/* </MyChats> */}
        {/* <Chat></Chat> */}
      </header>
    </div>

  )
}

export default App

