import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import MoviePage from "./components/MoviePage";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import SeatsReservation from "./components/SeatsReservation";
import ResevSuccess from "./components/ReservSuccess";

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/log-in' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/profile' exact component={Profile} />

          <Route path='/movies/:movieId' exact component={MoviePage} />
          <Route path='/reservation/:movieId' exact component={SeatsReservation} />

          <Route path='/checkout' exact component={Checkout} />
          <Route path='/success' exact component={ResevSuccess} />

        </Switch>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
