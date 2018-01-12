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
      smallCircle: false
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
              {
               this.state.footerStatus ? <MethFooter remindClick={true}/> : ''
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MethodOneThree