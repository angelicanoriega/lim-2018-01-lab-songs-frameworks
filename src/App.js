import React, { Component } from 'react';
import './App.css';
import Counter from './contador'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      maxLength:null,
    }
    this.apiKey = '5a1efd24e5a648c36e20f365271a017a';
    this.before = this.before.bind(this);
    this.after = this.after.bind(this);
  }
  componentWillMount() {
     fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=peru&api_key=${this.apiKey}&limit=10&format=json`).then(res => res.json())
        .then(resp => {
          const search=resp.topartists.artist;
          // Cambiando los valores de las propiedades
            this.setState({
              name:search[0].name,
              img:search[0].image[3]["#text"],
              search:search,
              maxLength:search.length
            })    
          
            // fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.name}&api_key=${this.apiKey}&limit=10&format=json`).then(res => res.json())
            // .then(o => {console.log(this.state);
            //   console.log(o);
              
            // })
            // .catch(e => console.log(e))
        })
      .catch(e => console.log(e))
      
      
      
  }
  before() {    
    if(this.state.counter===this.state.maxLength-1){
      const more=0;
      this.setState({
        counter: more,
        img:this.state.search[more].image[3]["#text"],
        name:this.state.search[more].name
      });
    }
    else{
     const more=this.state.counter + 1;
    this.setState({
      counter: more,
      img:this.state.search[more].image[3]["#text"],
      name:this.state.search[more].name
    }); 
    }
    
  }
  after() {
    if(this.state.counter===0){
      const more=this.state.maxLength-1;
      this.setState({
        counter: more,
        img:this.state.search[more].image[3]["#text"],
        name:this.state.search[more].name
      });
    }
    else{
     const more=this.state.counter - 1;
    this.setState({
      counter: more,
      img:this.state.search[more].image[3]["#text"],
      name:this.state.search[more].name
    }); 
    }
    
  } 
  render() {
    console.log(this.state);
    
    const todos = 
    <div className="row">
      <div className="col-md-12 text-center p-5">
      <img src={this.state.img} className="img-fluid"  alt="imagende artista"/>
      </div>
      <div className="col-md-12 text-center">
        <div className="row">
          <div className="col-3 col-md-3  p-2">
          <i className="fas fa-angle-left display-4"onClick={this.after}></i>
          </div>
          <div className="col-6 col-md-6  pt-3">
          {this.state.name}
          </div>
          <div className="col-3 col-md-3  p-2">
          <i className="fas fa-angle-right display-4"  onClick={this.before}></i>
          </div>
        </div>
      </div>
      <div className="col-md-12">
      
      <Counter
      nameArtist={this.state}
      />
      </div>
    </div>
    
    return (
    <div className="App">
      <nav className="navbar navbar-dark  ">
        <a href="#" className="navbar-brand fas fa-music" >
          <span className="pl-3" >Music</span> </a>  
      </nav>
      <div className="container mt-5 p-5">
        <div className="row ">
          <div className="col-md-12">
          {todos}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
