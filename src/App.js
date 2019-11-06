import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import HomePage from 'pages/HomePage/HomePage';
import About from 'pages/About/About';
import Contact from 'pages/Contact.jsx';
import Library from 'pages/Library/Library';
import Department from 'pages/Department/Department';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import DepartmentPages from 'pages/DepartmentPages';
import Data from 'database/data.json';
import BlogPage from 'pages/BlogPage';
import BlogListPage from 'pages/BlogListPage';
function App() {
  return (
    <Router>
		<Header
			time = {new Date().toLocaleTimeString('en-US', {hour12: true, hour: 'numeric', minute: 'numeric'})} 
			/>
    	<div className="App">
        	<Route path="/" render={(props) => <HomePage {...props} data = {Data}/>} exact />
        	<Route path="/about" render={(props) => <About {...props} data = {Data.about}/>} />
        	<Route path="/contact" component={Contact} />
          	<Route path="/libraries" render={(props) => <Library {...props} data = {Data.library}/>} />
        	<Route path="/departments" render={(props) => <Department {...props} data = {Data.department}/>} />
          	<Route path="/departments/:name" component={DepartmentPages} exact/>
          	<Route path="/event" component={Event} />
			<Route path="/blog-list/:id" component={BlogPage} exact />
        	<Route path="/blog-list" component={BlogListPage} exact />
      	</div>
	  	<Footer/>
    </Router>
  );
}

export default App;
