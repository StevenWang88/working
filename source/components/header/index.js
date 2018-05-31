import React, { Component } from 'react'
// import './style.scss'

class Header extends Component {

  render() {
    return (
      <div className="app">
        <header className="header">
          这是一个导航头
        </header>
        <div className="content">{this.props.children}</div>
      </div>
    )
  }
}
export default Header