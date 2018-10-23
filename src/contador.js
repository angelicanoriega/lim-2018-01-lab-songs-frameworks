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
    componentDidUpdate(){
        console.log(this.props.search);
        // this.state.song=nameSong;
        

    }
    render() {
        console.log(Object.keys(this.state), this.state.counter);
        // console.log(this.state.song);   
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
export default Contador