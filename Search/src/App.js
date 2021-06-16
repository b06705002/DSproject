import './App.css';
import React, { useState } from 'react';
import Result from './container/Result';
import Search from './container/Search';

const App = () => {

  const [search, setSearch] = useState(false);
  const [data, setData] = useState(null);

  return (
    <div className="App">
      { search ? (<Result data={data}/>) 
        : 
        (<Search setSearch={setSearch} setData={setData}/>)}
    </div>
  );
}

export default App;