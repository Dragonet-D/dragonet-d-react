import React, {Component} from 'react'
import './index.scss'
import bg from './bg.png'
import MethHeader from './../MethHeader/MethHeader'
import MethFooter from './../MethFooter/MethFooter'

class MethodOneThree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerRemind: 'Comparing the chromatogram of the unknown mixture with those of known substances',
      footerStatus: true,
      initRemind: 'The unknown mixture has separated into its coloured components.',
      afterRemind: 'How many components did the unknown mixture separate into?',
      bigCircle: false,
      smallCircle: false,
      remindClick: false,
      triangle: false
    }
  }

  render() {
    return (
      <div className="page_wrapper">
        <div className="page_content">
          <img src={bg} alt="bg"/>
          <div className="remind_1_3">
            <div className="remind_content">
              {
                <MethHeader headerRemind={this.state.headerRemind}/>
              }
              <main className="main">
                <section className="main_top">
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
                </section>
                <section className="main_bottom">
                  <h2 className="title">Click on the names of the substances that the mixture contains.</h2>
                  <div className="clicks">
                    <div className="click_a click">
                      <div className="click_content">A</div>
                    </div>
                    <div className="click_b click">
                      <div className="click_content">B</div>
                    </div>
                    <div className="click_c click">
                      <div className="click_content">C</div>
                    </div>
                  </div>
                </section>
              </main>
              {
                this.state.footerStatus ?
                  <MethFooter remindClick={this.state.remindClick} triangle={this.state.triangle}/> : ''
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MethodOneThree