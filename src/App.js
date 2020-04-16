import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom"; // HashRouter na potrzeby gh pages
import Navbar from "./components/layout/Navbar";
import MobileMenuDrawer from "./components/layout/MobileMenuDrawer";
import RootView from "./views/RootView";
import PokemonView from "./views/PokemonView";
import InfoView from "./views/InfoView";
import Search from "./views/SearchView";
import NoMatch from "./views/NoMatch";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <HashRouter>
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        <MobileMenuDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Switch>
          <Route exact path="/" component={RootView} />
          <Route path="/pokemon/:name" component={PokemonView} />
          <Route path="/info" component={InfoView} />
          <Route path="/search" component={Search} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
