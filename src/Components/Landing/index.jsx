import React from "react";
import { Link } from "react-router-dom";


export default function landing () {
    return (
        <div>
            <h1>Biemvenido a mi PokeWeb!!!!!!</h1>
            <Link to = '/pokemons'>
                <button>ingresar</button>
            </Link>
        </div>
    )
}