import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./index.css"

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

class LikeButton extends Component {
  static defaultProps = {
    likedText: "取消",
    unlikedText: "点赞"
  }

  constructor(props) {
    super(props)
    this.state = { 
      isLiked: false,
    }
  }

  handleClickOnLikeButton() {
    this.setState({
      isLiked: !this.state.isLiked
    })
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    return(
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked 
          ? this.props.likedText 
          : this.props.unlikedText} 👍
      </button>
    )
  }
}

class Title extends Component {
  handleClickOnTitle(word, e) {
    console.log(this, word, e.target.innerHTML)
  }

  render() {
    return(
      <h1 onClick={this.handleClickOnTitle.bind(this, "test")}>React Litte Book</h1>
    )
  }
}

class Header extends Component {
  render() {
    return(
      <div>
        <Title />
        <h2>This is Header</h2>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return(
      <div>
        <h2>This is main content</h2>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return(
      <div>
        <h2>This is footer</h2>
      </div>
    )
  }
}

class User extends Component {
  render() {
    const { user } = this.props
    return(
      <div>
        <div>Name: {user.name}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <hr />
      </div>
    )
  }
}

class Index extends Component {
  render() {
    return(
      <div>
        {users.map((user, i) => <User key={i} user={user} />)}
      </div>
    )
  }
}

const HelloWorld = (props) => {
  const sayHi = (event) => alert('Hello World')
  return(
    <div onClick={sayHi}>Hello World</div>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById("root")
)