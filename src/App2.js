import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ChildChild extends Component{
    static contextTypes={
        title:PropTypes.string
    }

    render(){
        return(
            <div>
               {this.context.title}
            </div>
        )
    }

}

//子组件
class Child extends Component{
   
    render(){
        return(
            <div>
                <ChildChild />
            </div>
        )
    }
}

//父组件
export default class App2 extends Component {
    static childContextTypes={
        title:PropTypes.string
    }

    getChildContext(){
        return {
            title:'组件传递'
        }
    }

    render() {
        return (
            <div>
                <Child />
            </div>
        )
    }
}
