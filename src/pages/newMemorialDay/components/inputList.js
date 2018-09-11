import React from 'react'
import { createForm } from 'rc-form'
import {  WhiteSpace, InputItem, List, Button, WingBlank, DatePicker } from 'antd-mobile'
import styles from './inputList.less'


const nowTimeStamp = Date.now()
const now = new Date(nowTimeStamp)
const minDate = new Date(0)

class InputList extends React.Component {
  constructor (props){
    super(props)
    this.state={
      date: '',
    }
  }


  componentDidMount () {
    // this.autoFocusInst.focus();
  }
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(value,error)
    })
  }
  render () {
    const { getFieldProps } = this.props.form
    return (
      <div className={styles.inputList}>
        <WhiteSpace size='lg'/>
        <List>
          <InputItem
            {...getFieldProps('name',{
              rules: [{required: true}],
            })}
            type='text'
            placeholder="输入纪念日名称"
            clear
            labelNumber={6}
          >纪念日名称</InputItem>
        </List>
        <List className="date-picker-list" style={{ backgroundColor: 'white'}}>
          <DatePicker
            value={this.state.date}
            minDate={minDate}
            maxDate={now}
            onChange={date => this.setState({ date })}
          >
            <List.Item>纪念日日期</List.Item>
          </DatePicker>
        </List>
        <WhiteSpace size='lg'/>
        <WingBlank>
          <Button type='primary' onClick={this.submit}>提交</Button>
        </WingBlank>
      </div>
    )
  }
}

const InputListWrapper = createForm()(InputList)
export default InputListWrapper
