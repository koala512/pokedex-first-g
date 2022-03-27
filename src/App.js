import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './home/Home';
import Details from './details/Details';
import dataType from './data/types.json'
import data from './data/pokemons.json';

function App() {
  const [lang, setLang] = React.useState( "fr" )

  const t = lang
  console.log(lang,'langage dans app');

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} dataType={dataType} lang={lang} setLang={setLang} t={t}/>}>
          <Route path="/details/:id" element={<Details data={data} t={t} dataType={dataType} />} />
        </Route> 
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;