import React from 'react';

import {Switch, HashRouter,Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Config} from './pages/config';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/"> 
            <Home/>
          </Route>
          <Route exact path="/config">
            <Config/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

{/* Route在这里是路由的意思 */}
