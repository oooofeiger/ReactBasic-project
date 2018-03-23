import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Row, Col, BackTop} from 'antd';

export default class PCNewsDetails extends React.Component{
  constructor(){
    super();
    this.state = {
      newsItem:''
    }
  }

  componentDidMount(){
    fetch()
    .then(res=>res.json())
    .then(json => {
      this.setState();
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
            <div class='articleContainer' dangerousSetInnerHTML={this.createMarkup()}></div>
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
