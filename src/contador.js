import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.song = 'NOMBRE DE la cancion'
        this.state = {
            counter: 0
        }
        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);
    }
    componentDidUpdate() {
        console.log(this.props);
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
        return (
            <div className='row pt-2 text-center border'>
                 <div className="col-12 col-md-6 ">
                    <p>{this.song}</p>
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