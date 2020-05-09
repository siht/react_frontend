import React from 'react';
import Header from './components/Header'
import ImageList from './components/ImageList'
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Sidebar></Sidebar>
      <ImageList></ImageList>
    </div>
  );
}

export default App;
