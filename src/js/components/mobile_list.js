import React from 'react';
import {Row, Col} from 'antd';
import {BrowseRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default class MobileList extends React.Component {
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
    fetch('http://localhost:8080/juhe/toutiao/index?type='+this.props.type+'&key=ef4a86a03b270aa4be489573bf3f31dd')
    .then(response => response.json())
    .then(json => this.setState({news:json.result.data.slice(0,this.props.count)}));
  }

  render(){
    const {news} = this.state;
    const newsList = news.length ?
    news.map((item,index)=>(
      <section key={index} class="m_article list-item special_section clearfix">
        <Link to={`detail/${item.uniquekey}`}>
          <div class="m_article_img">
            <img src={item.thumbnail_pic_s} alt={item.title} />
          </div>
          <div class="m_article_info">
            <div class="m_article_title">
              <span>{item.title}</span>
            </div>
            <div class="m_article_desc clearfix">
              <div class="m_article_desc_l">
                <span class="m_article_channel">{item.type}</span>
                <span class="m_article_time">{item.date}</span>
              </div>
            </div>
          </div>
        </Link>
      </section>
    )) : '正在加载...'

    return (
      <div>
        <Row>
          <Col span={24}>
            {newsList}
          </Col>
        </Row>
      </div>

    )
  }

}
