import React from 'react'
import ReactDOM from 'react-dom'
//引入路由
import {Router,Route,hashHistory} from 'react-router'
//引入路由所加载的组件
import Index from './index'

import list from './list'

export default class App extends React.Component{
    render(){
        return(
            <ul>
                <li><a href="#/index">首页</a></li>
                <li><a href="#/list">列表</a></li>
            </ul>
        )
    }
}

//配置react路由
const routeres = <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/index" component={Index} />
    <Route path="/list" component={list} />
</Router>

ReactDOM.render(routeres,document.getElementById('root'))