import React from 'react'
import {createForm} from 'rc-form'
import {Button, DatePicker, InputItem, List, Toast, WhiteSpace, WingBlank} from 'antd-mobile'
import styles from './inputList.less'
import { updateMemorialDay } from '../../../utils/request'


const nowTimeStamp = Date.now()
const now = new Date(nowTimeStamp)
const minDate = new Date(0)


class InputList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: '',
    }
  }

  componentDidMount () {
    // this.autoFocusInst.focus();
  }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      if (error) {
        Toast.info('亲爱的~纪念日名称你没填啊！', 3, null, false)
        return
      }
      if (!this.state.date) {
        Toast.info('亲爱的~你没选择时间呀！', 3, null, false)
        return
      }
      const time = new Date(this.state.date).formate('yyyy-MM-dd hh:mm')
      const obj = {
        id:this.props.id ||'',
        time: time,
        phone:localStorage.getItem('phone'),
        ...value,
      }
      console.log(obj)
      updateMemorialDay(obj)
    })
  }

  render () {
    const {getFieldProps} = this.props.form
    return (
      <div className={styles.inputList}>
        <WhiteSpace size='lg'/>
        <List>
          <InputItem
            {...getFieldProps('name', {
              rules: [{required: true}],
            })}
            type='text'
            placeholder="输入纪念日名称"
            clear
            labelNumber={6}
          >纪念日名称</InputItem>
        </List>
        <List className="date-picker-list" style={{backgroundColor: 'white'}}>
          <DatePicker
            value={this.state.date}
            minDate={minDate}
            maxDate={now}
            onChange={date => this.setState({date})}
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
