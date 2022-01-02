import './App.css';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Collection from './components/Collection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Male from './components/Male';
function App() {
  return (
    <Router>
    <Navbar />
        <Switch>
          <Route exact path="/" component={Section1} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/male" component={Male} />
          <Redirect to="/" />
        </Switch>
    <Footer />
    </Router>
  );
}
export default App;
