import React, { Component } from 'react';
import './App.css';
import Artis from './Artis'

class App extends Component {

render() {    
return (
    <div className="App">
        <nav className="navbar navbar-dark  ">
            <a href=".App" className="navbar-brand fas fa-music" >
            <span className="pl-3" >Music</span> </a>  
        </nav>
        <div  className="container mt-5 p-5">
            <div className="row ">
                <div className="col-md-12">
                    <Artis/>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
