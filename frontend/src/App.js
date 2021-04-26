import './App.css';
import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom"; 
import Chat from './components/Chat';

function App() {
  
  const [email, setEmail] = useState('')
  const [emailWarning, setEmailWarning] = useState(false);
  
  let history = useHistory();
  function login() {
    if (email) {
      localStorage.setItem('email', email);
      history.push("chat");
    }
    else if(!email){
      setEmailWarning(true)
    }
  }

  const updateEmail = (e) => {
    setEmail(e)
    setEmailWarning(false)
  }


  return (
    <Switch>
      <Route path="/:room" component={Chat} />
      <Route path="/">
        <div className="container">
        <main className="main">
          <h1 className="title">
            Welcome
          </h1>

          <section className="loginSection">
            <input type="email" onChange={(e)=>updateEmail(e.target.value)} placeholder="Email" />
            {
              emailWarning&&
              <span className="warning">You need to enter your email.</span>
            }
            <button onClick={login}>Continue</button>
          </section>
          
        </main>
      </div>
      </Route>
    </Switch>
  );
}

export default App;
