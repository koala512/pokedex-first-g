import React from 'react';
import Card from './card/Card';
import { Link,Outlet } from "react-router-dom";
import './list.css'

export default function List({pokemons, types, t }) {
    return(
        <>
        <div className='list-container'>
        <aside style={{ float: "right" }}>
        <Outlet />
      </aside>
            {pokemons.map((pokemon)=>{return <Link to= {`/details/${pokemon.id}`} key={pokemon.id} style={{textDecoration:"none", color:"black"}}><Card key={pokemon.id} name={pokemon} types={types} t={t}></Card></Link> })}
        </div>
        </>
        
    )
}