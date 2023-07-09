import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";
import { theme } from "./styles";
import HomeView from "./containers/HomeView/HomeView";
import "./App.css";

const App = () => {
    return (
      <Container id="APP_CONTAINER">
          <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
              <HomeView />
            </StyledEngineProvider>
          </ThemeProvider>
      </Container>
    );
  };
  
  export default App;
  
  const Container = styled("div")`
    height: 100%;
    display: flex;
    flex-direction: column;
  `;
  