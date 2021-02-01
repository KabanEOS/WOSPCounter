import "./App.css";
import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

      //screens
      import inject from './frontend/inject'
      import counter from './frontend/counter'
      import relacja from './frontend/relacja'

      //components
      

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={relacja}/>
          <Route exact path="/inject" component={inject} />
          <Route exact path="/relacja" component={counter} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
