import React, { Component } from 'react';


class Contador extends Component {
    constructor(props) {

        super(props);
        this.state = {
            counter: 0,
            song:''
        }
    }
    like=(name)=>{
        console.log(name);
        
        this.setState({
            counter: this.state.counter + 1
        });
    }
    dislike=(name)=>{
        console.log(name);

        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        };
    }
    render() {
        console.log(this.props.song);
        return (
            <div className='row pt-2 text-center border'>
                 <div className="col-12 col-md-6 ">
                    <p>{this.props.song}</p>
                </div>
                <div className="col-12 col-md-2 ">
                    <p>{this.state.counter}</p>
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
export default Contador