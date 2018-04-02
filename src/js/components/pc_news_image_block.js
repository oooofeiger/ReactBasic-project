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

  componentDidMount(){
    this._isMounted = true;
    var myFetchOptions = {
      method: 'GET',
      mode: 'cors'
    };
    fetch('http://localhost:8080/juhe/toutiao/index?type='+this.props.type+'&key=ef4a86a03b270aa4be489573bf3f31dd')
    .then(response => response.json())
    .then(json => {
      if(this._isMounted){
        this.setState({news:json.result.data.slice(0,this.props.count)})
      }
    });
  }

  componentWillUnMount() {
    this._isMounted = false;
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
    const authorP = {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }

    const newsList = news.length ?
    news.map((item,index)=>(
      <div key={index} class='imageblock' style={{width:this.props.imgWidth}}>
        <Link to={item.url} target='_blank'>
          <div class='custom-image'>
            <img alt='' title={item.title} style={styleImage} src={item.thumbnail_pic_s} />
          </div>
          <div class='custom-card'>
            <h3 title={item.title} style={styleH3}>{item.title}</h3>
            <p title={item.author_name} style={authorP}>{item.author_name}</p>
          </div>
        </Link>
      </div>
    )) : '正在加载...'

    return (
      <div class='topNewsList'>
        <Card title={this.props.cardTitle} bordered="true" style={{width:this.props.width}}>
            {newsList}
        </Card>
      </div>

    )
  }

}
