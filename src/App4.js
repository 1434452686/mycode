import React, { Component } from 'react'

export default class App4 extends Component {
    constructor(props){
        console.log('1.1constructor初始化工作..')
        super(props)

        this.state={
            
        }
    }
    handleClick(){
        console.log(this)
    }

    UNSAFE_componentWillMount(){
        console.log("1.2初始化 componentWillMount")
    }
    componentDidMount(){
        console.log("1.4异步数据加载 componentDidMount")
        //这里适合发送异步请求
    }


    render() {
        console.log('1.3执行render...')
        return (
            <div>
                <p onClick={this.handleClick.bind(this)}>组件生命周期</p>
            </div>
        )
    }
}
