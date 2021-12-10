
//tema
import Router from "./router";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
};

export default App;


/* import Contact from "./views/Contact";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {//* <Home /> * /}
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App; */
