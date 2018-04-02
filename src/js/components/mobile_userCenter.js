import React from 'react';
import {Row, Col, Icon, Tabs, Message, Form, Input, Button, CheckBox,
        Card, Notifination, Upload, Modal, Menu} from 'antd';
import {Switch,BrowserRouter as Router,Route,Redirect,Link} from 'react-router-dom';
import MobileFooter from './mobile_footer';
import MobileHeader from './mobile_header';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

export default class MobileUserCenter extends React.Component{
  render(){
    return (
      <div>
        <MobileHeader />
        <Row>
          <Col span = {24}>
          <Tabs>
            <TabPane tab='我的收藏列表' key='1'></TabPane>
            <TabPane tab='我的评论列表' key='2'></TabPane>
            <TabPane tab='图像设置' key='3'></TabPane>
          </Tabs>
          </Col>
        </Row>
        <MobileFooter />
      </div>
    )
  }
}
