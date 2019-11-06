import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import HomePage from 'pages/HomePage/HomePage';
import About from './pages/About/About';
import Contact from './pages/Contact.jsx';
import ThuVien from './pages/ThuVien/ThuVien';
import BanNganh from './pages/BanNganh/BanNganh';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Data from 'database/data.json';
function App() {
  return (
    <Router>
		<Header
			time = {new Date().toLocaleTimeString('en-US', {hour12: true, hour: 'numeric', minute: 'numeric'})} 
			/>
    	<div className="App">
        	<Route path="/" render={(props) => <HomePage {...props} data = {Data}/>} exact />
        	<Route path="/about" render={(props) => <About {...props} data = {Data.about}/>} />
        	<Route path="/Contact" component={Contact} />
          <Route path="/Libraries" component={ThuVien} />
        	<Route path="/BanNganh" render={(props) => <BanNganh {...props} data = {Data.banNganh}/>} />
          <Route path="/BanNganhs/:name" component={BanNganhPages} />
          <Route path="/Event" component={Event} />
      	</div>
	  	<Footer/>
    </Router>
  );
}

export default App;
