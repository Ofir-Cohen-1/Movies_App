import { Container } from "@mui/system";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/Navbar/Navbar";
import Trending from "./components/Pages/Trending/Trending";
import Movies from "./components/Pages/Movies/Movies";
import Series from "./components/Pages/Series/Series";
import Search from "./components/Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>{" "}
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
