import React from 'react'
import styles from './index.less'


class memorialDayItem extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      isEidt : false,
    }
  }
  render (){
    let { props } = this.props
    if(props){
      return(
        <div className={styles.memorialDayItem}>
          <h3 className={styles.title}>
            {props.val.title}
            {
              !this.state.isEidt ? (<i></i>) : (<b></b>)
            }
          </h3>
          <p className={styles.date}><span>日期：{props.val.dateTime}</span><span>下次：{props.val.nextTime}</span></p>
          <p className={styles.countdown}>距离{props.val.title}还有 <span>{props.val.countdown}</span> <b>天</b></p>
          <p className={styles.totalTime}>总计{props.val.totalTime}天</p>
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
