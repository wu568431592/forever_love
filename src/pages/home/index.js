import React from 'react'
import { connect } from 'dva'
import styles from './index.less'

const Home = () => {

  return (
    <div className={styles.form}>
      home
    </div>
  )
}

Home.propTypes = {

}

export default connect(({ home }) => ({ home }))(Home)
