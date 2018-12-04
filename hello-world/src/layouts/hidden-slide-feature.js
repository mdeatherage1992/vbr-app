import React, { Component } from 'react';


export default class Example extends Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.state = {
      cursor: 0,
      result: []
    }
  }



  handleKeyDown(e) {
    const { cursor, result } = this.state
    console.log(this.state)
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      console.log(this.state)
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < result.length - 1) {
      console.log(this.state)
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
    }
  }



  render() {
    const { cursor } = this.state

    return (
      <div className="button">
      <button>
      </button>
      </div>
    )
  }
}
