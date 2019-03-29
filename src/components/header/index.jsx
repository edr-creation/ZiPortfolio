import React, { Component } from "react"
import ReactDOM from "react-dom"
import lax from "lax.js"
import "./style.css"

class Header extends Component {
  componentDidMount() {
    this.el = ReactDOM.findDOMNode(this)
    lax.addElement(this.el)
  }

  componentWillUnmount = () => {
    lax.removeElement(this.el)
  }

  render() {
    return (
      <header className="container">
        <h1 className="header--title lax" data-lax-preset="driftLeft-400">
          Enzo Do rosario
        </h1>
        <p className="header--subtitle lax" data-lax-preset="driftRight-400">
          React.js Developer
        </p>
      </header>
    )
  }
}

export default Header
