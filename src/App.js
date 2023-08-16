import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Greeting from './Greeting';
import Footer from './Footer';
import GreetingWithProp from './GreetingWithProp';
import React, { useState, useEffect } from 'react';
import EventHandler from './EventHandler';
import './styles.css';
import styles from './Button.module.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home'; // Create this component
import About from './About'; // Create this component
import TodoApp from './TodoApp';




function App() {

  const [count, setCount] = useState(0);
  useEffect(() => {
  const timer = setInterval(() => {
    setCount(prevCount => prevCount + 1);
  }, 1000);
  return () => clearInterval(timer);
}, []);

  const [showMessage, setShowMessage] = useState(false);

  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');
const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!email.includes('@')) {
    setEmailError('Invalid email format');
    return;
  }

  // Add form submission logic
};

const StyledComponent = styled.div`
  background-color: pink;
  padding: 15px;
  border-radius: 10px;
`;


return (

  <div style={{
    backgroundColor: 'lightblue',
    padding: '10px',
    borderRadius: '5px',
  }}>
  <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route path="/home" exact element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/todo" element={<TodoApp/>} />
      </Routes>
    </Router>
    <h1>Hello, React!</h1>
    <Greeting name="John" message="Let's learn React together!" />
    <GreetingWithProp/>
    <h2 className="myClass">Count: {count}</h2>
    <button onClick={() => setShowMessage(!showMessage)} className={styles.button} >
      Toggle Message
    </button>
    <br />
    {showMessage && <p>Hello, React Event Handling!</p>}
    <EventHandler />

    <ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

<form onSubmit={handleSubmit}>
  <input
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    placeholder="Username"
  />
  <input
    type="email"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
      setEmailError('');
    }}
    placeholder="Email"
  />
  <button type="submit" className={styles.button}>Submit</button>
  {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
</form>

<StyledComponent>Styled with CSS-in-JS</StyledComponent>

    <Footer />
  </div>
);

}



export default App;
