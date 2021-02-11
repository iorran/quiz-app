import { Home } from './pages/home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Quiz } from './pages/quiz';

function App() {

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
   