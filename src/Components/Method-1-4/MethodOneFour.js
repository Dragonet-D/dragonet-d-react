import React, {Component} from 'react'
import bg from './bg.png'
import './index.scss'
import MethHeader from './../MethHeader/MethHeader'

class MethodOneFour extends Component {
  constructor(props) {
    super(props)
    this.goHome = this.goHome.bind(this)
    this.state = {
      homeShow: false,
      headerRemind: 'Comparing the chromatogram of the unknown mixture with those of known substances'
    }
  }

  goHome() {
    window.location.reload()
  }

  render() {
    return (
      <div className="page_wrapper">
        <div className="page_content">
          <img src={bg} alt="bg"/>
          <div className="remind_1_4">
            <div className="remind_content">
              {
                <MethHeader
                  homeShow={this.state.homeShow}
                  headerRemind={this.state.headerRemind}
                />
              }
              <main className="main">
                <div className="box">
                  <div className="box_top">
                    <div className="box_top_content">
                      <div className="mask"/>
                    </div>
                  </div>
                  <div className="box_bottom">
                    <div className="substances">
                      <div className="unknown sub">
                        Unknown <br/> Mixture
                      </div>
                      <div className="sub_a sub">
                        Substance <br/> A
                      </div>
                      <div className="sub_b sub">
                        Substance <br/> B
                      </div>
                      <div className="sub_c sub">
                        Substance <br/> C
                      </div>
                    </div>
                  </div>
                </div>
                <div className="summary">
                  <h2 className="title">Summary</h2>
                  <div className="content">
                    <span className="line_1">The mixture comprises substances A and B.</span>
                    <span className="line_2">You can identify the components of an <br/>unknown mixture by matching its</span>
                    <span className="line_3">chromatogram with those of known <br/> substances.</span>
                  </div>
                </div>
              </main>
              <footer className="meth_footer">
                <div className="previous footer_guide">
                  <div
                    className="prev_content guide_content"
                    onClick={this.goHome}
                  >Back to Home
                  </div>
                </div>
                <div className="replay footer_guide">
                  <div className="replay_content guide_content">Replay</div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MethodOneFour