import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./index.css"

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

class Index extends Component {
  constructor() {
    super()
    this.state = {
      likedText: "已赞",
      unlikedText: "赞"
    }
  }

  handleClickOnChange() {
    this.setState({
      likedText: "取消",
      unlikedText: "点赞"
    })
  }

  render() {
    return(
      <div>
        <LikeButton 
          likedText={this.state.likedText} unlikedText= {this.state.unlikedText}
          onClick={() => console.log('Click on like button!')}/>
        <div>
          <button onClick={this.handleClickOnChange.bind(this)}>
            修改 wordings
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById("root")
)