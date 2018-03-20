import React from 'react';
import {Card} from 'antd';
import {BrowseRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default class PCImageBlock extends React.Component {
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
    .then(json => this.setState({news:json.data.slice(0,this.props.count)}));
  }

  render(){
    const {news} = this.state;
    const styleImage = {
      display : "block",
      width: this.props.imageWidth,
      height:"90px"
    };
    const styleH3 = {
      width: this.props.imageWidth,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    };

    const newsList = news.length ?
    news.map((item,index)=>(
      <div key={index} class='imageblock'>
        <Link to={`details/${item.uniquekey}`} target='_blank'>
          <div class='custom-image'>
            <img alt='' style={styleImage} src={item.imageUrls[0]} />
          </div>
          <div class='custom-card'>
            <h3 style={styleH3}>{item.title}</h3>
            <p>{item.posterScreenName}</p>
          </div>
        </Link>
      </div>
    )) : '正在加载...'

    return (
      <div class='topNewsList'>
        <Card title={this.props.cartTitle} bordered="true" style={{width:this.props.width}}>

        </Card>
      </div>

    )
  }

}
