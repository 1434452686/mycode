//引入核心模块
import React, { Component } from 'react'
import ReactDom from 'react-dom'
//引入路由
import{Router,Route,hashHistory} from 'react-router'
//引入路由所需的组件
import Index from './index'
import list from './list'

export default class App2 extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="#/index">首页</a></li>
                    <li><a href="#/list">列表</a></li>
                </ul>
            </div>
        )
    }
    
}
//配置路由
const routeres = <Router history={hashHistory}>
    <Route path="/" component={App2} />
    <Route path="/index" component={Index} />
    <Route path="/list" component={list} />

</Router>

ReactDom.render(routeres,document.getElementById('root'))
