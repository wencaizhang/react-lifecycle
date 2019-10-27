import React, { Component } from "react";
class App extends Component {
  state = {
    num: 1
  }
  render() {
    return (
      <div>
        sss
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('update');
    
    console.log(this.state.num)  // 4, 5
  }
  componentDidMount() {
    setTimeout(() => {
      console.log('timeout')  // 8
    })

    new Promise((resovle) => {
      console.log('before')  // 1
      resovle('then')
      console.log('after')  // 2
    }).then(res => {
      console.log(res)  // 7
    })

    let { num } = this.state
    this.setState({
      num: ++num
    }, () => {
      console.log('after setState')  // 6
    })
    console.log('---')  // 3
  }
}
export default App