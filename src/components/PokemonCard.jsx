import { useState, useEffect } from "react";

// function Pokedex({ nombrePokemon }) {
//   const [pokemon, setPokemon] = useState(null);
//   useEffect(() => {
//     if (!nombrePokemon) return;

//     console.log(`Buscando a ${nombrePokemon}...`);

//     fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Pokemon no encontrado...");
//       })
//       .then((data) => {
//         console.log("datos recibidos:", data);
//         setPokemon(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setPokemon(null);
//       });
//   }, [nombrePokemon]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       {pokemon ? (
//         <div
//           style={{
//             border: "1px solid #ccc",
//             display: "inline-block",
//             padding: "20px",
//             borderRadius: "10px",
//           }}
//         >
//           <h2>{pokemon.name}</h2>
//           <img
//             src={pokemon.sprites.front_default}
//             alt={pokemon.name}
//             style={{ width: "200px" }}
//           />
//           <p>
//             <strong>ID:</strong>
//             {pokemon.id}
//           </p>
//           <p>
//             <strong>Tipo:</strong>
//             {pokemon.types[0].type.name}
//           </p>
//         </div>
//       ) : (
//         <h3>Cargando pokémon...</h3>
//       )}
//     </div>
//   );
// }

// export default Pokedex;

// Ejercicio día 27: PROPS //

function PokemonCard({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pokemonName) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Pokemon no encontrado...");
      })
      .then((data) => {
        setPokemon(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setPokemon(null);
      });
  }, [pokemonName]);

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  if (!pokemon) {
    return <div>Cargando pokémon...</div>;
  }

  return (
    <div style={{ border: "1px solid grey", padding: "10px", margin: "10px" }}>
      <h2>Nombre: {pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={{ width: "100px" }}
      />
      <p>Elemento: {pokemon.types[0].type.name}</p>
      <p>ID: {pokemon.id}</p>
    </div>
  );
}

export default PokemonCard;
