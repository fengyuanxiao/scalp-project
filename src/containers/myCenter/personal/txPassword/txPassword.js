import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Form, Input, Button, message } from 'antd';

const FormItem = Form.Item;
let phoneNum = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;   //手机号码正则

class TxPasswords extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: "请输入手机号"
    }
  }

  // 电话号码 onChange事件修改 placeholder值 让短信验证码按钮判断调用获取验证码接口
  numbersPlace = (e) => {
    this.setState({
      placeholder: e.target.value
    })
    // console.log(e.target.value);
  }

  // 获取短信验证码按钮
  duanXinCodeBtn = () => {
    if ( this.state.placeholder === "请输入手机号" ) {
      message.error("请输入手机号码！");
    } else if ( !phoneNum.test(this.state.placeholder) ) {
      message.error("请输入正确的手机号码！");
    } else {
      // 再次调用获取验证码接口
      message.success("获取验证码中");
    }
    // console.log(this.state.placeholder);
  }

  // 提交表单按钮、ajax提交数据
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <header className="tabTitle">
          <div className="return"><Link to="/personal"><Icon type="left" theme="outlined" />返回</Link></div>
          提现密码设置
        </header>
        <Form onSubmit={this.handleSubmit} className="login-form" style={{ padding: '3.5rem 0.7rem 0 0.7rem' }}>
          <FormItem
            label="图片验证码"
            >
              <img style={{ width: "100%" }} src={ require("../../../../img/captchaImg.png") } alt="图片验证码"/>
            {getFieldDecorator('tpCode', {
              rules: [{ required: true, message: '请输入图片验证码!' }],
            })(
              <Input className="buy-input" type="text" placeholder="请输入图片验证码" />
            )}
          </FormItem>
          <FormItem
            label="新密码"
            >
            {getFieldDecorator('newPassword', {
              rules: [{ required: true, message: '请输入新密码!' }],
            })(
              <Input className="buy-input" placeholder="请输入新密码" maxLength="11" />
            )}
          </FormItem>
          <FormItem
            label="确认密码"
            >
            {getFieldDecorator('okNewPassword', {
              rules: [{ required: true, message: '请输入确认密码!' }],
            })(
              <Input className="buy-input" type="text" placeholder="请输入确认密码" />
            )}
          </FormItem>
          <FormItem
            label="手机号"
            >
            {getFieldDecorator('numbers', {
              rules: [{ required: true, message: '请输入手机号!' }],
            })(
              <Input onChange={ this.numbersPlace } maxLength="11" className="buy-input" type="text" placeholder={ this.state.placeholder } />
            )}
          </FormItem>
          <FormItem
            label="动态码"
            >
            {getFieldDecorator('dongtaiCode', {
              rules: [{ required: true, message: '请输入动态码!' }],
            })(
              <Input className="buy-input" type="text" placeholder="请输入动态码" />
            )}
          </FormItem>
          <Button type="primary" onClick={this.duanXinCodeBtn} className="accountBtn">获取短信验证码</Button>
          <Button type="primary" htmlType="submit" className="accountBtn">提交</Button>
        </Form>
      </div>
    )
  }
}

const TxPassword = Form.create()(TxPasswords);
export default TxPassword