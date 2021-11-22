import Navigation from './components/Navigation';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        {/* <div className="content">
          <Home />
        </div> */}
        {/* <Welcome /> */}
        <LoginForm />
      </div>
      <Footer />
    </Router>
  );
}

export default App;