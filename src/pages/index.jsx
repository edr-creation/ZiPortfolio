import React, { Component } from "react"
import lax from "lax.js"

import Header from "../components/header"

import "../styles/global.css"

class Index extends Component {
  constructor(props) {
    super(props)
    lax.setup()

    document.addEventListener(
      "scroll",
      function(x) {
        lax.update(window.scrollY)
      },
      false
    )

    lax.update(window.scrollY)
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default Index
