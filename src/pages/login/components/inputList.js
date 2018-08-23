import React from 'react'
import { createForm } from 'rc-form'
import {  WhiteSpace, InputItem, List, Button, WingBlank, Toast } from 'antd-mobile'
import { login } from '../../../utils/request'

class InputList extends React.Component {
  componentDidMount () {
    // this.autoFocusInst.focus();
  }
  submit = () => {
    console.log('submit')
    this.props.form.validateFields((error, value) => {
      if(error && error.phone){
        Toast.info('亲爱的~手机号不能空着呀~',3,null,false)
        return
      }
      if(error && error.password){
        Toast.info('亲爱的~你忘记输密码了~',3,null,false)
        return
      }
      if(value.phone && value.phone.length<11){
        Toast.info('亲爱的~你输的是手机号嘛？',3,null,false)
        return
      }
      login(value.phone, value.password)
        .then(res=>{
          console.log(res)
          if(res.message === 'success'){
            this.props.loginSuccess()
          }else{
            Toast.offline('亲爱的~手机号密码不匹配呀~',3,null,false)
          }
        })
        .catch(err=>{
          console.log(err)
        })
    })
  }
  render () {
    const { getFieldProps } = this.props.form
    return (
      <div>
        <WhiteSpace size='lg'/>
        <List renderHeader={() => '用户登录'}>
          <InputItem
            placeholder="请输入手机号"
            clear
            labelNumber={3}
            type="phone"
            {...getFieldProps('phone',{
              rules: [{required: true}],
            })}
          >
            <div style={{ backgroundImage: 'url('+require('../../../../assets/icons/username.svg')+')', backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
          <InputItem
            type='password'
            labelNumber={3}
            placeholder="请输入密码"
            clear
            {...getFieldProps('password',{
              rules:[{required:true}],
            })}
          >
            <div style={{ backgroundImage: 'url('+require('../../../../assets/icons/password.svg')+')', backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
        </List>
        <WhiteSpace size='lg'/>
        <WingBlank>
          <Button type='primary' onClick={this.submit}>登录</Button>
        </WingBlank>
      </div>
    )
  }
}

const InputListWrapper = createForm()(InputList)
export default InputListWrapper
