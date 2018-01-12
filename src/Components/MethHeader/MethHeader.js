import React, {Component} from 'react'
import './header.scss'

class MethHeader extends Component {
  constructor(props) {
    super(props)
    this.goHome = this.goHome.bind(this)
  }

  goHome() {
    window.location.reload()
  }

  render() {
    return (
      <header className="meth_header">
        <div className="title">
          <h2 className="title_content">{this.props.headerRemind}</h2>
        </div>
        <div
          className="back_wrapper"
          style={{display: this.props.homeShow?'static' :'none'}}
        >
          <div
            onClick={this.goHome}
            className="back_home"
          >
            <div className="back_content">Home</div>
          </div>
        </div>
      </header>
    )
  }
}

export default MethHeader