import './App.css';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Collection from './components/Collection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Navbar />
        <Switch>
          <Route exact path="/" component={Section1} />
          <Route exact path="/collection" component={Collection} />
          <Redirect to="/" />
        </Switch>
    <Footer />
    </Router>
  );
}

export default App;
