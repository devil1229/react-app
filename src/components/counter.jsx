import React, { Component } from 'react';


class Counter extends Component {

    state = {
        count: 1,
        tags : ['tag1', 'tag2', 'tag3'],
        btnclasses: "btn btn-secondary btn-sm m-2"
    };
    
    render() { 
        return (
        <div>
            <span className={this.countClass()}>{ this.countFormat()}</span>
            <button className = {this.state.btnclasses} onClick={this.countIncrement}> + </button>
            <button className = {this.state.btnclasses} onClick={this.countDecrement}> - </button>
            <button className = {this.state.btnclasses} onClick={this.countIncrement}> Delete </button>
            <button className = {this.state.btnclasses} onClick={this.countIncrement}> update </button>
            <ul>
             {this.state.tags.map(tag => <li key={tag}> {tag}</li>)} 
            </ul>
        </div>
            );
    }

    countFormat() {
        return this.state.count == 0 ? <h1>zero</h1> : this.state.count;

    }

    countClass(){
        let classes = "badge m-2 badge-";
        classes += (this.state.count == 0) ? "warning" : "primary";
        return classes;
    }

    countIncrement = () => {
       //console.log('cliked' , this);
       this.setState({count : this.state.count + 1})
    }

    countDecrement = () => {
        //console.log('cliked' , this);
        if(this.state.count == 0) return;
        this.setState({count : this.state.count - 1})
     }
}
 
export default Counter;