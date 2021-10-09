import Header from "./components/Header";
import Info from "./components/Info";
import Biography from "./components/Biography";
import Photography from "./components/Photography";
import Links from "./components/Links";
import Music from "./components/Music";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import OneAlbum from "./components/albums/OneAlbum";

const App = () => {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <div className="bg-gray-200 md:bg-forest-img md:w-full md:min-h-screen md:bg-no-repeat md:bg-cover md:bg-center">
              <Header />
              <Info />
            </div>
            <Links />
            <Photography />
            <Footer />
          </Route>

          <Route exact path="/biography">
            <div className="bg-green-50">
              <Header />
              <Biography />
            </div>
          </Route>

          <Route exact path="/music">
            <div className="bg-green-50">
              <Header />
              <Music />
            </div>
          </Route>

          <Route exact path="/albums/:id">
            <div className="bg-green-50">
              <Header />
              <OneAlbum />
            </div>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
 
export default App;
