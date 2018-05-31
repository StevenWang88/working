import React, { Component } from 'react'
import { add, less, multiple, except } from '../../actions'
import { connect } from 'react-redux'

@connect((state) => {
  return {
    result: state.get('todo').toJS().value
  }
})
class Counter extends Component {

  handleCat = (e) => {
    e.preventDefault()
    let icon = e.target.value
    let fnum = Number(this.refs.one.value)
    let lnum = Number(this.refs.two.value)
    switch(icon) {
      case '+':
        return this.props.dispatch(add({fnum, lnum}))
      case '-':
        return this.props.dispatch(less({fnum, lnum}))
      case '*':
        return this.props.dispatch(multiple({fnum, lnum}))
      case '/':
        return this.props.dispatch(except({fnum, lnum}))
    }
  }

  render() {
    return (
      <div>
       <input ref="one" />&nbsp;&nbsp;&nbsp;&nbsp;
       <input ref="two" />&nbsp;&nbsp;&nbsp;&nbsp;
       <span>=&nbsp;&nbsp;{this.props.result}</span><br/>
       <button value="+" onClick={this.handleCat}>加法</button>
       <button value="-" onClick={this.handleCat}>减法</button>
       <button value="*" onClick={this.handleCat}>乘法</button>
       <button value="/" onClick={this.handleCat}>除法</button>
      </div>
    )
  }
}

export default Counter