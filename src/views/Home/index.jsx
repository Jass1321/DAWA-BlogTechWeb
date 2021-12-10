// import { useState, useEffect } from "react";
// import NavBar from "../../components/NavBar";

// const Home = () => {
//   //variable, funcion. el useState sirve para incializar el valor
//   const [count, setCount] = useState(0);
//   //modificar el estado de count (la variable)
//   const handleSumCount = (e) => {
//     console.log("evento", e);
//     setCount(count + 1);
//   };
//   const handleRestCount = () => setCount(count - 1);

//   //primera funcion que se ejecuta cuando se renderiza la pagina
//   useEffect(() => {
//     console.log("useEffect");
//     document.title = `Click en la pagina ${count}`;
//   }, [count]); //con el array se evita que se forme un bucle infinito
//   //ejecutar una sola vez -> array vacio []
//   //ejecutar cada vez que count cambie -> array con count [count]

//   return (
//     <div>
//       <NavBar />
//       <h1>Mi primera pagina con React</h1>
//       <h2>Numero de clicks: {count}</h2>
//       <button onClick={handleSumCount}>Sumar</button>

//       {/*esto se usa cuando se necesita pasar parametros y
//           	no se ejecuta al inicio del React */}
//       <button onClick={(e) => handleSumCount(e)}>Sumar event</button>
//       <button onClick={handleRestCount}>Restar</button>
//     </div>
//   );
// };

// export default Home;

import { Container, Grid } from "@mui/material";
import { HistoryCard } from "../../components";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <HistoryCard />
        </Grid>
		<Grid item xs={12} sm={6}>
          <HistoryCard />
        </Grid>
		<Grid item xs={12} sm={6}>
          <HistoryCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
