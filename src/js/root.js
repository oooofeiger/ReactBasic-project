import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,BrowserRouter as Router,Route,Redirect,Link} from 'react-router-dom';
import {Button} from 'antd';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';

class Root extends React.Component{

  render(){
    return (
      <Router>
        <div>
          <MediaQuery query="(min-device-width:1224px)">
            <PCIndex />
          </MediaQuery>
          <MediaQuery query="(max-device-width:1224px)">
            <MobileIndex />
          </MediaQuery>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'))

export default Root;
