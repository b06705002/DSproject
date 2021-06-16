import './App.css';
import React, { useState } from 'react';
import Result from './container/Result';
import Search from './container/Search';

const App = () => {

  const [search, setSearch] = useState(false);
  const [data, setData] = useState([]);

  return (
    <>
      { search ? (<Result data={data} setSearch={setSearch} setData={setData}/>) 
        : 
        (<Search setSearch={setSearch} setData={setData}/>)}
    </>
  );
}

export default App;