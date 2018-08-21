import React from 'react'
import { connect } from 'dva'
import styles from './index.less'

const Home = (home) => {
  console.log(home)
  return (
    <div className={styles.home}>
      home
    </div>
  )
}

export default connect(({ home }) => ({ home }))(Home)
