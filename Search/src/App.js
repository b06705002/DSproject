import './App.css';
import React, { useState } from 'react';
import Result from './comtainer/Result';
import Search from './comtainer/Search';

const App = () => {

  const [search, setSearch] = useState(false);

  return (
    <div className="App">
      { search ? (<Result />) 
        : 
        (<Search setSearch={setSearch} />)}
    </div>
  );
}

export default App;