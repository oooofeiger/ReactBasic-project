import React from 'react';
import {Card} from 'antd';
import {BrowseRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default class PCNewsBlock extends React.Component {
  constructor(){
    super();
    this.state = {
      news: ''
    };
  }

  componentDidMount(){
    this._isMounted = true;
    var myFetchOptions = {
      method: 'GET',
      mode: 'cors'
    };
    fetch('http://www.feiger.com.cn/Handler.ashx?action=getnews&type='+this.props.type+'&count='+this.props.count)
    .then(response => response.json())
    .then(json => {
      if(this._isMounted){
        this.setState({news:json.slice(0,this.props.count)})
      }
    });
  }

  componentWillUnMount() {
    this._isMounted = false;
  }

  render(){
    const {news} = this.state;
    const newsList = news.length ?
    news.map((item,index)=>(
      <li key={index}>
        <Link to={item.url} target='_blank'>{item.title}</Link>
      </li>
    )) : '正在加载...'

    return (
      <div class='topNewsList'>
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
      </div>

    )
  }

}
