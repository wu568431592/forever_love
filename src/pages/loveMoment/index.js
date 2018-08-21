import React from 'react'
import { connect } from 'dva'
import styles from './index.less'

const LoveMoment = (loveMoment) => {
  console.log(loveMoment)
  return (
    <div className={styles.loveMoment}>
      loveMoment
    </div>
  )
}


export default connect(({ loveMoment }) => ({ loveMoment }))(LoveMoment)
