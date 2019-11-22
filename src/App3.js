import React, { Component } from 'react'

export default class App3 extends Component {
    //挂载并初始化阶段
    constructor(props){
        console.log("1.1 constructor构造初始化开始..")
        super(props)

        //初始化数据状态
        this.state={num:0 }

        //事件函数this绑定
        this.handleClick = this.handleClick.bind(this)
    }

    UNSAFE_componentWillMount(){
        console.log("1.2componentWillMount加载中...")
    }

    componentDidMount(){
        console.log("1.4加载完成...")
    }
    handleClick(){
        //修改值
        this.setState({
            num:11
        })
    }

    //第二阶段--更新期
    UNSAFE_componentWillReceiveProps(){
        console.log('2.1,componentWillReceiveProps..')
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("2.2,shouldComponentUpdate")

        console.log("旧的值",this.state.num)
        console.log("新的值",nextState.num)

        //返回false 不会执行render true会执行 
        //判断数据是否相同 相同不会更新,不相同就去执行render
        return true  // return this.state.num !== nextState.num
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("2.3,componentWillUpdate..更新之前回调函数")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("2.5,componentDidUpdate..更新之后回调函数")
    }
    
    

    render() {
        console.log("1.3/2.4render...")
        return (
            <div>
               <p onClick={this.handleClick}>生命周期组件</p>
               <p onClick={this.handleClick}>生命周期组件</p>
            </div>
        )
    }
}

// class Father extends Component{
//     constructor(props){
//         super(props)

//         this.state={
//             fathernum:1
//         }
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({
//                 fathernum:10
//             })
//         }, 2000);
//     }
    

//     render(){
//         return(
//             <div>
//                 <App3 fathernum={this.state.num} />
//             </div>
//         )
//     }
// }
