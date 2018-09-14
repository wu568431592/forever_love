import React from 'react'
import styles from './index.less'
import { Modal } from 'antd-mobile'

const alert = Modal.alert

class memorialDayItem extends React.Component{
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  editNow (payload){
    this.props.props.onEdit(payload)
  }
  deleteMe (id){
    alert('删除', '亲爱的，你确定要删除么？', [
      { text: '手滑了~', onPress: () => console.log('cancel'), style: 'default' },
      { text: '嗯啊!', onPress: () => {
          this.props.props.onDelete(id)
        } },
    ])
  }
  render (){
    let { props } = this.props
    if(props){
      return(
        <div className={styles.memorialDayItem}>
          <h3 className={styles.title}>
            {props.val.name}
            <b onClick={()=>{this.deleteMe(props.val.id)}}></b>
            <i onClick={()=>{this.editNow({
              id:props.val.id,
              name:props.val.name,
              time:props.val.time,
            })}}></i>
          </h3>
          <p className={styles.date}><span>日期：{props.val.time.substring(0,11)}</span><span>下次：{props.val.next.substring(0,11)}</span></p>
          <p className={styles.countdown}>距离该纪念日还有 <span>{props.val.countDown}</span> <b>天</b></p>
          <p className={styles.totalTime}>总计{props.val.day}天</p>
        </div>
      )
    }else{
      return(
        <div></div>
      )
    }

  }

}
export default memorialDayItem
