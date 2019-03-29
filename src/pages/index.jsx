import React, { Component } from "react"
import lax from "lax.js"

import Header from "../components/header"
import Who from "../components/who"

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
        <Who />
      </div>
    )
  }
}

export default Index
