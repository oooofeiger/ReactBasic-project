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

  /*
关于react中切换路由时报以上错误，实际的原因是因为在组件挂载（mounted）之后进行了
异步操作，比如ajax请求或者设置了定时器等，而你在callback中进行了setState操作。
当你切换路由时，组件已经被卸载（unmounted）了，此时异步操作中callback还在执行，
因此setState没有得到值。
  */
  componentWillUnMount() {
    this._isMounted = false;
  }
// linkClick(e){
//   var ele = this.refs._url;
//   console.log(ele);
//   this.props.history.push(ele.getAttribute('data-url'))
//   // window.location.href = ele.getAttribute('data-url');
// }
  render(){
    const {news} = this.state;
    const newsList = news.length ?
    news.map((item,index)=>(
      <div key={index} class="m_article list-item special_section clearfix">
        <Link to={`details/${item.uniquekey}`}>
          <div class="m_article_img">
            <img src={item.thumbnail_pic_s} alt={item.title} />
          </div>
          <div class="m_article_info">
            <div class="m_article_title">
              <span>{item.title}</span>
            </div>
            <div class="m_article_desc clearfix">
              <div class="m_article_desc_l">
                <span class="m_article_channel">{item.realtype}</span>
                <span class="m_article_time">{item.date}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )) : '正在加载...';

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
