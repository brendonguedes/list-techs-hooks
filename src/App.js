import React, { useState, useEffect, useMemo, useCallback } from 'react';
import logo from './assets/rocket.svg';
import astronaut from './assets/astronaut.svg';
import './App.css';

function App() {
  const [techs, setTechs] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  useEffect(() => {
    const storageTech = localStorage.getItem('techs');

    if (storageTech) {
      setTechs(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <div className="App">
        <img className="logo" src={logo} alt="Rocketseat Logo" />
        <h2>My name is Brendon Guedes</h2>
        <h3>Estou aprendendo Hooks</h3>
        <ul>
          {techs.map(t => (
            <li key={t}> {t}</li>
          ))}
        </ul>
        <strong>You have {techSize} technologies</strong>
        <p>
          <input value={newTech} onChange={e => setNewTech(e.target.value)} />
        </p>
        <button type="button" onClick={handleAdd}>
          Add new tech
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <img className="astronaut" src={astronaut} alt="Astronaut" />
      </div>
    </>
  );
}

export default App;
