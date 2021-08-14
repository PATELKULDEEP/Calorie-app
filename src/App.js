import React from "react";
import Homepage from "./component/Homepage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Tdee from "./component/Tdee";
import Calories from "./component/Calories";
import Data from "./component/Data";



function App() {
  return (

    <Router>
        
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/tdee" component={Tdee} />
          <Route exact path="/calories" component={Calories} />
          <Route exact path="/data" component={Data} />
        </Switch>
    
  </Router>

  );
}

export default App;
