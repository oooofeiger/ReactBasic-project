import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Row, Col, BackTop} from 'antd';

export default class PCNewsDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newsItem:''
    }
  }

  componentDidMount(){
    console.log(this.props)
    fetch('http://www.feiger.com.cn/Handler.ashx?action=getnewsitem&uniquekey=' + this.props.match.params.uniquekey)
    .then(res=>res.json())
    .then(json => {
      var div = document.createElement('div');
      div.innerHTML = json.pagecontent;
      this.setState({newsItem: div.childNodes[0]});
      document.title = this.state.newsItem.title + ' - React News | React 驱动的新闻平台';
    })
  }

  createMarkup(){
    return {__html: this.state.newsItem.pagecontent};
  }

  render(){
    return (
      <div>
        <MobileHeader />
        <Row>
          <Col span={2}></Col>
          <Col span={14} class='container'>
            <div>{this.state.newsItem}</div>
          </Col>
          <Col span={6}></Col>
          <Col span={2}></Col>
        </Row>
        <MobileFooter />
        <BackTop />
      </div>

    )
  }



}
