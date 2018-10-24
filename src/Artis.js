import React, { Component } from 'react';
import './App.css';
import Counter from './contador'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      maxLength: null,
      song:[]
    }
    this.apiKey = '5a1efd24e5a648c36e20f365271a017a';
  }
  componentDidMount() {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=peru&api_key=${this.apiKey}&limit=10&format=json`).then(res => res.json())
      .then(resp => {
        const search = resp.topartists.artist;
        fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${search[0].name}&api_key=${this.apiKey}&limit=10&format=json`).then(res => res.json())
        .then(song => {
          const list=song.results.albummatches.album.map(list=>{return list.name})
          this.setState({
            name: search[0].name,
            img: search[0].image[3]["#text"],
            search: search,
            maxLength: search.length,
            song:list
          })
        })
        .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
      
  }
  before = () => {
      if (this.state.counter === this.state.maxLength - 1) {
        const more = 0;
        fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.search[more].name}&api_key=${this.apiKey}&limit=10&format=json`).then(res => res.json())
          .then(song => {
            const list=song.results.albummatches.album.map(list=>{return list.name})
            this.setState({
              counter: more,
              img: this.state.search[more].image[3]["#text"],
              name: this.state.search[more].name,
              song: list
            });
          })
      } else {
        const more = this.state.counter + 1;
        fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.search[more].name}&api_key=${this.apiKey}&limit=10&format=json`).then(res => res.json())
          .then(song => {
            const list=song.results.albummatches.album.map(list=>{return list.name})
            this.setState({
              counter: more,
              img: this.state.search[more].image[3]["#text"],
              name: this.state.search[more].name,
              song: list
            });
          })
      }
  }
  after = () => {
    if (this.state.counter === 0) {
      const more = this.state.maxLength - 1;
      fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.search[more].name}&api_key=${this.apiKey}&limit=10&format=json`).then(res => res.json())
      .then(song => {
        const list=song.results.albummatches.album.map(list=>{return list.name})
        this.setState({
          counter: more,
          img: this.state.search[more].image[3]["#text"],
          name: this.state.search[more].name,
          song: list
        });
      })
    } else {
      const more = this.state.counter - 1;
      fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.search[more].name}&api_key=${this.apiKey}&limit=10&format=json`).then(res => res.json())
          .then(song => {
            const list=song.results.albummatches.album.map(list=>{return list.name})
            this.setState({
              counter: more,
              img: this.state.search[more].image[3]["#text"],
              name: this.state.search[more].name,
              song: list
            });
          })
    }


  }
  render() {   
    console.log(this.state.song);
     
  return (
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
      {this.state.song.length ? 
          <div>
            {this.state.song.map((list,i) =>
              <Counter
                key={i}
                song={list}
                />
            )}
          </div>
         : (<p>cargando ...</p>)}
      </div>
  </div>
    );
  }
}
export default App;