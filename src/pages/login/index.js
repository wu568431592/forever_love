import React from 'react'
import { connect } from 'dva'
import styles from './index.less'

const Login = (login) => {
  console.log(login)
  return (
    <div className={styles.login}>
      login
    </div>
  )
}


export default connect(({ login }) => ({ login }))(Login)
