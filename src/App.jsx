import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard.jsx";

// function App() {
//   const [name, setName] = useState(`Pedro Díaz`);
//   const age = 30;
//   const isStudent = true;
//   const avatar = `https://i.pravatar.cc/300`;
//   const [contador, setContador] = useState(0);
//   const [text, setText] = useState("");

//   const [pokeTextInput, setPokeTextInput] = useState("");
//   const [busqueda, setBusqueda] = useState("pikachu");

//   const manejarBusqueda = () => {
//     setBusqueda(pokeTextInput.toLowerCase());
//   };

//   useEffect(() => {
//     document.title = `Contador: ${contador}`;
//     console.log(`Me he ejecutado porque el contador cambio`);
//   }, [contador]);

//   const inputText = (event) => {
//     const inputedText = event.target.value;
//     setText(inputedText);
//   };

//   const upCounter = () => {
//     setContador(contador + 1);
//   };

//   const downCounter = () => {
//     setContador(contador - 1);
//   };

//   const driveClick = () => {
//     if (name === "Gokú") {
//       setName("Pedro Díaz");
//     } else {
//       setName("Gokú");
//     }
//     console.log("Nombre cambiado a:", name);
//     console.log("¡Auch! Me has hecho click");
//   };

//   const masterFunction = () => {
//     upCounter();
//     driveClick();
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>Perfil de {name}</h1>

//       <h2>Contador mágico</h2>
//       <h3 style={{ fontSize: "4rem", margin: "10px" }}>{contador}</h3>
//       <img
//         src={avatar}
//         alt="Foto de perfil"
//         width="150"
//         style={{ borderRadius: "50%" }}
//       />
//       <p>Edad: {age} años</p>
//       <p>
//         Estado:
//         {isStudent ? "📚 Estudiando a tope" : " 🏖️ De vacaciones"}
//       </p>
//       <small>Nacimiento aprox: {2026 - age}</small>
//       <button
//         onClick={masterFunction}
//         style={{ padding: "10px 20px", fontSize: "16px" }}
//       >
//         Púlsame para aumentar el contador
//       </button>
//       <button
//         onClick={downCounter}
//         style={{ padding: "10px 20px", fontSize: "16px" }}
//       >
//         Púlsame para restar el contador
//       </button>

//       <h2>El espejo mágico</h2>

//       <input
//         type="text"
//         value={text}
//         onChange={inputText}
//         style={{ padding: "10px", fontSize: "18px" }}
//       />
//       <h3>Has escrito:</h3>
//       <p style={{ color: "blue", fontSize: "30px", fontWeight: "bold" }}>
//         {text}
//       </p>

//       <h2>Mira la pestaña del navegador ⬆️</h2>
//       <h3>{contador}</h3>

//       <div>
//         <h1>Buscador de Pókemon</h1>
//         <input
//           type="text"
//           value={pokeTextInput}
//           onChange={(e) => setPokeTextInput(e.target.value)}
//           style={{ padding: "10px", fontSize: "16px" }}
//         />
//         <button
//           onClick={manejarBusqueda}
//           style={{
//             padding: "10px 20px",
//             marginLeft: "10px",
//             fontSize: "16px",
//             cursor: "pointer",
//           }}
//         >
//           Buscar
//         </button>
//       </div>
//       <Pokedex nombrePokemon={busqueda} />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1>Pokédex (Usando Props)</h1>

      <PokemonCard pokemonName="Geodude" />

      <PokemonCard pokemonName="Charmander" />

      <PokemonCard pokemonName="Squirtle" />

      <PokemonCard pokemonName="Bulbasaur" />
    </div>
  );
}

export default App;
