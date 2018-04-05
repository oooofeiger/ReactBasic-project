import React from 'react';
import {Row,Col} from 'antd';
import { Menu, Icon, Tabs, Message, Form, Input, Button, CheckBox, Modal} from 'antd';
import { Link} from 'react-router-dom';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component {

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

    // if (localStorage.getItem('userNickName')) {
      // this.state.hasLogined = true;
      // this.state.userNickName = localStorage.getItem('userNickName');
      // this.state.userId = localStorage.getItem('userId')
		// }
  }


  componentWillMount(){
    const nickName = localStorage.getItem('userNickName');
    const userId = localStorage.getItem('userId');
    console.log(nickName)
		if (!!nickName) {
      // this.setState({hasLogined:true});
			this.setState({hasLogined:true,userNickName:nickName,userId:userId});
		}
	};

  setModalVisible(value){
    this.setState({modalVisible:value});
  }

  handleClick(e){
    console.log(this.state.hasLogined);
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
    localStorage.setItem('userId',userId);
    localStorage.setItem('userNickName',formData.r_userName);

    this.setState({hasLogined:true});

    // message.success('请求成功！')
    this.setModalVisible(false);

  }

  callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};
	logout(){
		localStorage.removeItem('userId');
		localStorage.removeItem('userNickName');
		this.setState({hasLogined:false});
	};
  login(e){
    e.preventDefault();
    var formData = this.props.form.getFieldsValue();
    const userId = ++this.state.userId;
    localStorage.setItem('userId',userId);
    localStorage.setItem('userNickName',formData.userName);
    this.setState({hasLogined:true});
  };

  render(){
    let {getFieldDecorator} = this.props.form;
    const userShow = this.state.hasLogined
    ?
    <Menu.Item key='logout' class='register'>
      <Button type='primary' htmlType='button'>{this.state.userNickName}</Button>
      &nbsp;&nbsp;
      <Link to={`/usercenter`}>
        <Button type='bashed' htmlType='button'>个人中心</Button>
      </Link>
      &nbsp;&nbsp;
      <Button type='ghost' htmlType='button' onClick={this.logout.bind(this)}>退出</Button>
    </Menu.Item>
    :
    <Menu.Item key='register' class='register'>
      <Icon type='appstore' />登录/注册
    </Menu.Item>;

    // console.log(this.props.form);


    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
             <a href='/' class='logo'>
              <img src='./src/images/logo.png' alt='logo' />
              <span>ReactNews</span>
             </a>
          </Col>
          <Col span={16}>
            <Menu mode='horizontal' onClick={this.handleClick.bind(this)} selectedKey={this.state.current}>
               <Menu.Item key='top'>
                <Icon type="appstore" />头条
              </Menu.Item>
              <Menu.Item key='shehui'>
                <Icon type="appstore" />社会
              </Menu.Item>
              <Menu.Item key='guonei'>
                <Icon type="appstore" />国内
              </Menu.Item>
              <Menu.Item key='guoji'>
                <Icon type="appstore" />国际
              </Menu.Item>
              <Menu.Item key='keji'>
                <Icon type="appstore" />科技
              </Menu.Item>
              <Menu.Item key='tiyu'>
                <Icon type="appstore" />体育
              </Menu.Item>
              <Menu.Item key='shishang'>
                <Icon type="appstore" />时尚
              </Menu.Item>
            </Menu>

            <Modal title='用户中心' wrapClassName='vertical-center-modal'
            visible={this.state.modalVisible}
            onCancel={()=>this.setModalVisible(false)}
            onOk = {()=>this.setModalVisible(false)} okText='关闭'>
              <Tabs type='card' onChange={this.callback.bind(this)}>
              <TabPane tab="登录" key="1">
									<Form horizontal='true' onSubmit={this.login.bind(this)}>
										<FormItem label="账户">
                      {getFieldDecorator('userName')(<Input type='text' placeholder='请输入您的帐号' />)}
										</FormItem>
										<FormItem label="密码">
                      {getFieldDecorator('password')(<Input type='password' placeholder='请输入您的密码' />)}
										</FormItem>
										<Button type="primary" htmlType="submit">登录</Button>
									</Form>
								</TabPane>
                <TabPane tab='注册' key='2'>
                  <Form horizontal='true' onSubmit={this.handleSubmit.bind(this)}>
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
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}
const PCHeader_ = Form.create()(PCHeader);
export default PCHeader_ ;
