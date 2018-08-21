import React from 'react'
import { connect } from 'dva'
import styles from './index.less'

const Interaction = (interaction) => {
  console.log(interaction)
  return (
    <div className={styles.interaction}>
      Interaction
    </div>
  )
}


export default connect(({ interaction }) => ({ interaction }))(Interaction)
