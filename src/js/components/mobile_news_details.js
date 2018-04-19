import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Row, Col, BackTop} from 'antd';
import {withRouter} from 'react-router-dom';

class MobileNewsDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newsItem:''
    }
  }
debugger;
  componentDidMount(){
    debugger;
    console.log(this.props)
    fetch('http://www.feiger.com.cn/Handler.ashx?action=getnewsitem&uniquekey=' + this.props.match.params.uniquekey)
    .then(res=>res.json())
    .then(json => {
      this.setState({newsItem: json.pagecontent});
      document.title = this.state.newsItem.title + ' - React News | React 驱动的新闻平台';
    })
  }

  render(){
    return (
      <div>
        <MobileHeader />
        <Row>
          <Col span={24} class='container'>
            <div class='articleContainer' dangerouslySetInnerHTML={{__html:this.state.newsItem}}></div>
          </Col>
        </Row>
        <MobileFooter />
        <BackTop />
      </div>

    )
  }
}
export default MobileNewsDetails;
