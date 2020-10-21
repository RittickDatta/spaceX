import React from 'react';
import './App.css';
import LaunchPrograms from './containers/LaunchPrograms/LaunchPrograms';
import Filter from './containers/Filter/Filter';

function App() {
  return (
    <div className="App">
      <Filter />
      <LaunchPrograms />
    </div>
  );
}

export default App;
