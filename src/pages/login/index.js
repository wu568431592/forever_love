import React from 'react'
import { connect } from 'dva'
import styles from './index.less'
import InputList from './components/inputList'
import * as routerRedux from "react-router-redux"
import PropTypes from "prop-types"

const Login = ({login, dispatch}) => {
  console.log(login)
  const inputProps = {
    loginSuccess (){
      dispatch(routerRedux.replace({
        pathname:'/home',
      }))
    },
  }
  return (
    <div className={styles.login}>
      <div className={styles.title}>Welcome Back</div>
      <InputList {...inputProps}/>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.object,
  dispatch:PropTypes.func,
}


export default connect(({ login }) => ({ login }))(Login)
