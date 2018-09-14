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
      name:'',
    }
  }

  componentDidMount () {
    // this.autoFocusInst.focus();
    console.log(this.props)
    if(this.props.props.time){
      const time = new Date(Date.parse(this.props.props.time.replace(/-/g,"/"))) ||''
      this.setState({
        date:time?time:'',
        name:this.props.props.name?this.props.props.name:'',
      })
    }
  }
  // handleChange = () =>{
  //   console.log(this.inputRef.props.value)
  // }
  submit = () => {
    if(!this.state.name){
      Toast.info('亲爱的~纪念日名称你没填啊！', 3, null, false)
      return
    }
    if (!this.state.date) {
      Toast.info('亲爱的~你没选择时间呀！', 3, null, false)
      return
    }
    const time = new Date(this.state.date).formate('yyyy-MM-dd hh:mm')
    const obj = {
      id:this.props.props.id ||'',
      time: time,
      phone:localStorage.getItem('phone'),
      name:this.state.name,
    }
    updateMemorialDay(obj)
      .then(res=>{
        if(res.code === 200){
          this.props.props.id ? Toast.success('修改成功！', 3, null, false):Toast.success('添加成功！', 3, null, false)
          setTimeout(()=>{
            this.props.props.goback()
          },3000)
        }
      })
      .catch(err=>{
        console.log(err)
      })
  }
  handleChange = (value)=>{
    this.setState({
      name:value,
    })
  }
  render () {
    const { getFieldProps } = this.props.form
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
            value={this.state.name}
            onChange={this.handleChange}
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
