
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';


function App() {
  return (
   <Router>
     
    <Switch>
      <Route path='/' component={Home} exact></Route>
      <Route path='/signin' component={SignInPage} exact ></Route>
    </Switch>
    
  
  </Router>
  );
}

export default App;
