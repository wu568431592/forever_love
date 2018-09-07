import React from 'react'
import { connect } from 'dva'
import { NavBar, Icon  } from 'antd-mobile'
import styles from './index.less'
import * as routerRedux from "react-router-redux"

const NewMemorialDay = ({newMemorialDay,dispatch}) => {
  console.log(newMemorialDay)
  let goback = ()=>{
    console.log('onLeftClick')
    console.log(routerRedux)
    dispatch(routerRedux.goBack())
  }
  return (
    <div className={styles.newMemorialDay}>
      <NavBar
        style={{position:'fixed',width:'100%',top:'0px',left:'0px'}}
        icon={<Icon type="left" />}
        onLeftClick={() => goback()}
      >纪念日</NavBar>
      newMemorialDay
    </div>
  )
}

export default connect(({ newMemorialDay }) => ({ newMemorialDay }))(NewMemorialDay)
