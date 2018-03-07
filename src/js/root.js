import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,BrowserRouter as Router,Route,Redirect,Link} from 'react-router-dom';

class Root extends React.Component{

  render(){
    return (
      <Router>
        <div>
          init
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'))

export default Root;
