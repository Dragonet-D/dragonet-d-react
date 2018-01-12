import React, {Component} from 'react'
import bg from './bg.png'
import './index.scss'
import MethHeader from './../MethHeader/MethHeader'
import MethFooter from './../MethFooter/MethFooter'
import MethodOneTwo from './../Method-1-2/MethodOneTwo'


class MthOneOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerRemind: 'Comparing the chromatogram of the unknown mixture with those of known substances'
    }
  }

  render() {
    return (
      <div className="page_wrapper">
        {
          0 ? <div className="page_content">
            <img src={bg} alt="bg"/>
            <div className="remind_1_1">
              <div className="remind_content">
                {
                  <MethHeader headerRemind={this.state.headerRemind}/>
                }
                <main className="main">
                  <div className="main_left">
                    <div className="left_top">
                      <div className="bottom_show">
                        <div className="spots">
                          <div className="black_spot spot"/>
                          <div className="orange_spot spot"/>
                          <div className="blue_spot spot"/>
                          <div className="red_spot spot"/>
                        </div>
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
                    <div className="left_bottom">
                  <span>The mixture is suspected to <br/>
contain A, B, or C.</span>
                      <span style={{display: 'none'}}>Create a paper chromatogram of the <br/>unknown mixture, together with A, B and C.</span>
                    </div>
                  </div>
                  <div className="main_right">
                    <div className="right_top">
                      <h2 className="title">Known substances</h2>
                      <div className="beakers">
                        <div className="beaker_a beaker">
                          <div className="choose_a choose">A</div>
                        </div>
                        <div className="beaker_b beaker">
                          <div className="choose_b choose">B</div>
                        </div>
                        <div className="beaker_c beaker">
                          <div className="choose_c choose">C</div>
                        </div>
                      </div>
                    </div>
                    <div className="right_bottom">

                    </div>
                  </div>
                </main>
              </div>
              {
                <MethFooter/>
              }
            </div>
          </div> : <MethodOneTwo/>
        }
      </div>

    )
  }
}

export default MthOneOne