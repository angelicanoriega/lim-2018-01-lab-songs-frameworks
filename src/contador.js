import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.apiKey = '5a1efd24e5a648c36e20f365271a017a';
        this.state = {
            counter: 0,
            song:'NOMBRE DE la cancion'
        }
        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);

    }
    componentDidUpdate() {
        console.log(this.props);

    const artis= this.props.nameArtist
        fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${artis}&api_key=${this.apiKey}&limit=10&format=json`).then(res => res.json())
        .then(o => {
        this.state.song=o.results.albummatches.album[0].name
        })
        .catch(e => console.log(e))
        
    }
    like() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    dislike() {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        };
    }
    render() {
    console.log(this.state.song);
        
        return (
            <div className='row pt-2 text-center border'>
                 <div className="col-12 col-md-6 ">
                    <p>{this.state.song}</p>
                </div>
                <div className="col-12 col-md-2 ">
                    <span>{this.state.counter}</span>
                </div>
                <div className="col-6 col-md-2 ">
                    <i className="fas fa-thumbs-up" onClick={this.like}></i>
                </div>
                <div className="col-6 col-md-2 ">
                    <i   className="fas fa-thumbs-down" onClick={this.dislike}></i>
                </div>
            </div>
        )
    }
}
export default Counter