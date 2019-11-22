import React, { Component } from 'react'
import PropTypes from 'prop-types'
//子组件
class Header extends Component{
    static propTypes={
      title:PropTypes.string //默认属性为String
    }

    render(){
      return(
        <div style={{backgroundColor:"blue",height:"40px"}}>
          {this.props.title}  {/*接收父组件的属性*/}
        </div>
      )
    }
}
//父组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Header title='123'/>
        <Header title={'345'} />
      </div>
    )
  }
}
