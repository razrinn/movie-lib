import { Route, Switch } from "react-router-dom";
import HomeView from "ui/views/HomeView";
import MovieDetailView from "ui/views/MovieDetailView";
import NotFoundView from "ui/views/NotFoundView";

function RouterSwitch() {
  return (
    <Switch>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route exact path="/:id">
        <MovieDetailView />
      </Route>
      <Route path="*">
        <NotFoundView />
      </Route>
    </Switch>
  );
}

export default RouterSwitch;
