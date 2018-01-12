import React, {Component} from 'react'
import bg from './bg.png'
import './index.scss'
import MthOneOne from './../Method-1-1/MthOneOne'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      methodStatus: 1
    }
  }

  methodClick(index) {
    if (index === 2) {
      this.setState({
        methodStatus: 2
      })
    }
  }

  render() {
    return (
      <div className="page_wrapper">
        {
          this.state.methodStatus === 1 ? <div className="page_content">
            <img src={bg} alt=""/>
            <div className="remind">
              <header className="header">
                <h1>How to identify the separated components of an unknown mixture in a chromatogram?</h1>
              </header>
              <main className="main">
                <section
                  className="method_1 method"
                  onClick={this.methodClick.bind(this, 2)}
                >
                  <div className="method_content">
                    <h2 className="title">Method 1</h2>
                    <div className="description">Comparing <br/>chromatograms</div>
                  </div>
                </section>
                <section
                  onClick={this.methodClick.bind(this, 3)}
                  className="method_2 method"
                >
                  <div className="method_content">
                    <h2 className="title">Method 2</h2>
                    <div className="description">Comparing <br/>R<sub>f</sub> values</div>
                  </div>
                </section>
              </main>
            </div>
          </div> : this.state.methodStatus === 2 ? <MthOneOne/> : ''
        }
      </div>
    )
  }
}

export default Index