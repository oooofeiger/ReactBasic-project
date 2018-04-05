import React from 'react';
import {Row,Col} from 'antd';
import { Menu, Icon, Tabs, Message, Form, Input, Button, CheckBox, Modal} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;


class MobileHeader extends React.Component {
  constructor(){
    super();
    this.state = {
      current:'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userId:0
    }
  }

  setModalVisible(value){
    this.setState({modalVisible:value});
  }

  handleClick(e){
    console.log(e)
    if(e.key === 'register'){
      this.setState({current:'register'});
      this.setModalVisible(true);
      console.log(this.state.modalVisible)
    }else{
      this.setState({current:this.key});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    var myFetchOptions = {
      method:'GET'
    };
    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    // fetch('').then().then();
    const userId = ++this.state.userId;
    this.setState({
      userNickName:formData.r_userName,
      userId:userId
    });
    console.log(this.state);

    if (this.state.action=="login") {
			this.setState({hasLogined:true});
		}

    // message.success('请求成功！')
    this.setModalVisible(false);

  }
  login(){
    this.setModalVisible(true);
  }

  callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};


  render(){
    let {getFieldDecorator} = this.props.form;
    const userShow = this.state.hasLogined ?
    <Link to={`/usercenter`}>
      <Icon type='inbox' />
    </Link>
    :
    <Icon type='setting' onClick={this.login.bind(this)} />


    return (
      <div id='mobileheader'>
        <header>
          <img src='./src/images/logo.png' alt="logo" />
          <span>ReactNews</span>
          {userShow}
        </header>

        <Modal title='用户中心' wrapClassName='vertical-center-modal'
        visible={this.state.modalVisible}
        onCancel={()=>this.setModalVisible(false)}
        onOk = {()=>this.setModalVisible(false)} okText='关闭'>
          <Tabs type='card' onChange={this.callback.bind(this)}>
            <TabPane tab="登录" key="1">
              <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  {getFieldDecorator('userName')(<Input type='text' placeholder='请输入您的账号' />)}
                </FormItem>
                <FormItem label="密码">
                  {getFieldDecorator('password')(<Input type='password' placeholder='请输入您的密码' />)}
                </FormItem>
                <Button type="primary" htmlType="submit">登录</Button>
              </Form>
            </TabPane>
            <TabPane tab='注册' key='2'>
              <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                {getFieldDecorator('r_userName')(<Input type='text' placeholder='请输入您的账号' />)}
                </FormItem>
                <FormItem label="密码">
                {getFieldDecorator('r_password')(<Input type='password' placeholder='请输入您的密码'/>)}
                </FormItem>
                <FormItem label="确认密码">
                {getFieldDecorator('r_confirmPassword')(<Input type='password' placeholder='请再次输入您的密码' />)}
                </FormItem>
                <Button type='primary' htmlType='submit'>注册</Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    )
  }
}
export default MobileHeader = Form.create()(MobileHeader)
