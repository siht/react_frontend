import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header'
import ImageList from './components/ImageList'
import Sidebar from './components/Sidebar'
import Form from './components/Form'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/insert">
            <Form />
          </Route>
          <Route path="/">
            <ImageList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
