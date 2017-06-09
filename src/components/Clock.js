import React, { Component } from 'react';

export default class Clock extends Component {
    constructor() {
        super();
        this.state = {date : new Date()}
    }

    tick() {
        this.setState({date:new Date()});
    }

    render() {
        return (
            <h2>{this.state.date.toLocaleTimeString()}</h2>
        );
    }

   componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

}