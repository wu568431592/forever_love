import React from 'react'
import { connect } from 'dva'
import styles from './index.less'
import InputList from './components/inputList'

const Login = (login) => {
  console.log(login)

  return (
    <div className={styles.login}>
      <div className={styles.title}>Welcome Back</div>
      <InputList />
    </div>
  )
}


export default connect(({ login }) => ({ login }))(Login)
