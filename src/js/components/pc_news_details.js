import React from 'react';
import {Row, Col} from 'antd';

export default class PCNewsDetails extends React.Component{
  constructor(){
    super();
    this.state = {
      newsItem:''
    }
  }

  componentDidMount(){
    fetch('http://www.feiger.com.cn/Handler.ashx?action=getnewsitem&uniquekey=' + this.props.match.params.uniquekey)
    .then(res=>res.json())
    .then(json => {
      this.setState({newsItem: json});
      document.title = this.state.newsItem.title + ' - React News | React 驱动的新闻平台';
    })
  }

  createMarkup(){
    return {__html: this.state.newsItem.pagecontent};
  }

  render(){
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={14} class='container'>
            <div class='articleContainer' dangerousSetInnerHTML={this.createMarkup()}></div>
          </Col>
          <Col span={6}></Col>
          <Col span={2}></Col>
        </Row>
      </div>

    )
  }



}
