import React, {Component} from 'react'
import './index.scss'
import bg from './bg.png'
import MethHeader from './../MethHeader/MethHeader'
import MethFooter from './../MethFooter/MethFooter'
import MethodOneThree from './../Method-1-3/MethodOneThree'

class MethodOneTwo extends Component {
  constructor(props) {
    super(props)
    this.goNextPage = this.goNextPage.bind(this)
    this.state = {
      headerRemind: 'Comparing the chromatogram of the unknown mixture with those of known substances',
      footerStatus: true,
      initRemind: 'The unknown mixture has separated into its coloured components.',
      afterRemind: 'How many components did the unknown mixture separate into?',
      bigCircle: false,
      smallCircle: false,
      goStatus: true
    }
  }

  goNextPage() {
    this.setState({
      goStatus: false
    })
  }

  render() {
    return (
      <div className="page_wrapper">
        {
          this.state.goStatus ? <div className="page_content">
            <img src={bg} alt="bg"/>
            <div className="remind_1_2">
              <div className="remind_content">
                <MethHeader headerRemind={this.state.headerRemind}/>
                <main className="main">
                  <section className="main_top">
                    <div className="top_left top_box">
                      <h2 className="title">Start</h2>
                      <div className="box">
                        <div className="box_bottom">
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
                    </div>
                    <div className="top_right top_box">
                      <h2 className="title">End</h2>
                      <div className="box">
                        <div className="box_top">
                          <div className="box_top_content">
                            <div className="mask"/>
                            {
                              this.state.bigCircle ? <div className="big_circle"/> : ''
                            }
                            {this.state.smallCircle ?
                              <div>
                                <div className="small_one small"/>
                                <div className="small_two small"/>
                              </div> : ''
                            }
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
                    </div>
                  </section>
                  <section className="main_bottom">
                    <h2 className="title">{this.state.initRemind}</h2>
                    <div className="bottom_remind">
                      <div className="remind_left">
                        <div className="remind_content">No. Look at the chromatogram <br/>and try again!</div>
                      </div>
                      <div className="remind_mid">
                        {
                          [1, 2, 3].map((item, index) => {
                            return (
                              <div key={index} className="choose">
                                <div className="choose_content">{item}</div>
                              </div>
                            )
                          })
                        }
                      </div>
                      <div className="remind_right">
                        <div className="remind_content">No. Are there so many? <br/>Try again!</div>
                      </div>
                    </div>
                  </section>
                </main>
                {
                  this.state.footerStatus ? <MethFooter goNextPage={this.goNextPage}/> : ''
                }
              </div>
            </div>
          </div> : <MethodOneThree/>
        }
      </div>
    )
  }
}

export default MethodOneTwo