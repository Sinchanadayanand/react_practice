import React, { Component } from 'react';



class Events extends Component {
    constructor(props){
            super(props)
            this.state={
                name:"sinchana",age:21
            }
            this.changeName=this.changeName.bind(this);
        }
            changeName(){
                this.setState ({name:'sharadhi', age:22});
            }

    render() {
        return (
            <div>
                <h1>{this.state.name}|{this.state.age}</h1>
                <button onClick={this.changeName}>clickme</button>
            </div>
        );
    }
}

export default Events;