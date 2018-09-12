import React from 'react'
import { connect } from 'dva'
import { NavBar, Icon } from 'antd-mobile'
import styles from './index.less'
import InputList from  './components/inputList'
import * as routerRedux from "react-router-redux"


const NewMemorialDay = ({newMemorialDay,dispatch}) => {
  console.log(newMemorialDay)
  let goback = ()=>{
    dispatch(routerRedux.goBack())
  }

  return (
    <div className={styles.newMemorialDay}>
      <NavBar
        style={{position:'fixed',width:'100%',top:'0px',left:'0px'}}
        icon={<Icon type="left" />}
        onLeftClick={() => goback()}
      >纪念日</NavBar>
      <InputList />
    </div>
  )
}

export default connect(({ newMemorialDay }) => ({ newMemorialDay }))(NewMemorialDay)
