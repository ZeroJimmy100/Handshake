import React, {useState} from 'react';
import io from 'socket.io-client';
import './App.css';
// import Chat from './components/Chat';
import Chat2 from './components/Chat2';
import User from './components/User';
import { UserContext } from './components/UserContext';
import { Router } from '@reach/router';

function App() {
  const [ value, setValue ] = useState("");
 
  return (
    <div className="App">
      <UserContext.Provider value={{value, setValue}}>
        <Router>
          <User path="/"/>
          <Chat2 path="/chatroom"/>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
