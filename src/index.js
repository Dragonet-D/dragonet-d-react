import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Index from './Components/Index/Index'
import './common/scss/reset.scss'
import './common/scss/common.scss'
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
      <div className="all_wrapper">
        <Index/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
