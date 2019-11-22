import React, { Component } from 'react'

//受控组件
export default class App7 extends Component {
    constructor(props){
        super(props)
        this.state={ //设置默认初始化数据
            value:'username'
        }
    }

    handleChange(e){
        console.log(e.target.value)

        this.setState({ //修改值 验证值是否合法
            value:e.target.value
        })
    }
    render() {
        return (
            <div>
                用户名 <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/> <br /> <br />
                密&emsp;码 <input type="text"/><br /> <br />
                <button>登录</button>
            </div>
        )
    }
}
