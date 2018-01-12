import React, {Component} from 'react'
import './footer.scss'

class MethFooter extends Component {
  render() {
    return (
      <footer className="meth_footer">
        <div className="previous footer_guide">
          <div className="prev_content guide_content">Previous</div>
        </div>
        <div className="replay footer_guide">
          <div className="replay_content guide_content">Replay</div>
        </div>
        <div
          className="remind_click"
          style={{visibility: this.props.remindClick ? 'static' : 'hidden'}}
        >Click on the Next button to see the chromatogram</div>
        <div className="triangle"/>
        <div className="next footer_guide">
          <div className="next_content guide_content">Next</div>
        </div>
      </footer>
    )
  }
}

export default MethFooter