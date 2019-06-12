import React, { Component } from 'react';

class LifecycleA extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"sinchana"
        }
        console.log('LifecycleA initialization')
        }
       componentDidMount(){
           console.log('LifecycleA componentDid mount')
       } 
       componentWillMount(){
        console.log('LifecycleA componentwill mount')
    } 

    render() { 
        return (
            <div>
               <h1>this is the heading of the page</h1>
               <button>
                   click me
               </button>
            </div>
        );
    }
}

export default LifecycleA;