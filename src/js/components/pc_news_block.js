import React from 'react';
import {Card} from 'antd';
import {BrowseRouter as Router, Switch, Route, Link} from 'react-router-dom';
import fetchJsonp from 'fetch-jsonp';
// require('es6-promise').polyfill();

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
    fetchJsonp('http://120.76.205.241:8000/news/sogou?kw='+this.props.type+'&site=qq.com&apikey=1TM40J81k53iuIJ1PTiqGEeVNz1ZakIxGHnkx9uKXNM6m7rS2RQZOdFIOUDkapxJ')
    .then(response =>response.json())
    .then(json => this.setState({news:json}));
  }

  render(){
    const {news} = this.state;
    const newsList = news.length ?
    news.map((item,index)=>(
      <li key={index}>
        <Link to={`details/${item.uniquekey}`} target='_blank'>{item.title}</Link>
      </li>
    )) : '没有加载到任何新闻'

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
