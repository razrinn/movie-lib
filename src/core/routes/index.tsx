import { Route, Switch } from "react-router-dom";
import HomeView from "ui/views/HomeView";
import MovieDetailView from "ui/views/MovieDetailView";

function RouterSwitch() {
  return (
    <Switch>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route path="/:id">
        <MovieDetailView />
      </Route>
    </Switch>
  );
}

export default RouterSwitch;
