import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,BrowserRouter as Router,Route,Redirect,Link} from 'react-router-dom';
import {Button} from 'antd';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import PCUserCenter from './components/pc_userCenter';
import MobileUserCenter from './components/mobile_userCenter';
import MobileNewsDetails from './components/mobile_news_details';
import PCNewsDetails from './components/pc_news_details';


class Root extends React.Component{

  render(){
    return (
      <Router>
        <div>
          <MediaQuery query="(min-device-width:1224px)">
            <Route exact path='/' component={PCIndex} key={new Date().getTime()+1}></Route>
            <Route path="/details/:uniquekey" component={PCNewsDetails} key={new Date().getTime()}></Route>
            <Route path='/usercenter' component={PCUserCenter} ></Route>
          </MediaQuery>
          <MediaQuery query="(max-device-width:1224px)">
            <Route exact path='/' component={MobileIndex} key={new Date().getTime()+2}></Route>
            <Route path="/details/:uniquekey" component={MobileNewsDetails} key={new Date().getTime()+3}></Route>
            <Route path='/usercenter' component={MobileUserCenter}></Route>
          </MediaQuery>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'))

export default Root;
