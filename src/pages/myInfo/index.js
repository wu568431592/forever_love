import React from 'react'
import { connect } from 'dva'
import styles from './index.less'

const MyInfo = (myInfo) => {
  console.log(myInfo)
  return (
    <div className={styles.myInfo}>
      myInfo
    </div>
  )
}


export default connect(({ myInfo }) => ({ myInfo }))(MyInfo)
