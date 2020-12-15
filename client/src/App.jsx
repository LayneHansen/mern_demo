import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalProvider from "./utils/GlobalContext";
import Homepage from "./pages/Homepage";
import ViewTodos from "./pages/ViewTodos";
import AddTodos from "./pages/AddTodos";
import Navbar from "./components/Navbar";
import api from './utils/api';

function App() {
  api.getTodos().then( data => {
    console.log(data);
  });

  return (
    <Router>
      <GlobalProvider>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/todos" component={ViewTodos} />
            <Route exact path="/todos/new" component={AddTodos} />
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}

// function Homepage () {
//   return (
//     <>Component1</>
//   );
// }

// function Component2 () {
//   return (
//     <>Component2</>
//   );
// }

// function Component3 () {
//   return (
//     <>Component3</>
//   );
// }

export default App;
