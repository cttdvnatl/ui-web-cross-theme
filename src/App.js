import React, {  } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Libraries from './pages/Libraries.jsx';
import BanNganhPages from './pages/BanNganhPages.jsx';
import BlogPage from './pages/BlogPage';
import BlogListPage from './pages/BlogListPage';
import Event from './pages/Event.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Libraries" component={Libraries} />
        <Route path="/BanNganhs/:name" component={BanNganhPages} />
        <Route path="/blog-list/:id" component={BlogPage} exact />
        <Route path="/blog-list" component={BlogListPage} exact />
        <Route path="/Event" component={Event} />
        <Footer/>    
      </div>
    </Router>
  );

}

export default App;
