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

  componentWillMount(){
    var myFetchOptions = {
      method: 'GET',
      mode: 'cors'
    };
    fetch('http://localhost:8080/apis/news/qihoo?kw='+this.props.type+'&site=qq.com&apikey=1TM40J81k53iuIJ1PTiqGEeVNz1ZakIxGHnkx9uKXNM6m7rS2RQZOdFIOUDkapxJ')
    .then(response => response.json())
    .then(json => this.setState({news:json.data}));
  }

  render(){
    const {news} = this.state;
    const newsList = news.length ?
    news.map((item,index)=>(
      <li key={index}>
        <Link to={`details/${item.uniquekey}`} target='_blank'>{item.title}</Link>
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
