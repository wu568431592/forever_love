import React from 'react'
import { connect } from 'dva'
import { NavBar, Icon } from 'antd-mobile'
import styles from './index.less'
import InputList from  './components/inputList'
import router from 'umi/router'


const NewMemorialDay = ({ newMemorialDay }) => {
  console.log(newMemorialDay)
  const goback = ()=>{
    router.goBack()
  }
  const inputProps = {
    goback:goback,
    ...router.location.query,
  }

  return (
    <div className={styles.newMemorialDay}>
      <NavBar
        style={{position:'fixed',width:'100%',top:'0px',left:'0px'}}
        icon={<Icon type="left" />}
        onLeftClick={() => goback()}
      >纪念日</NavBar>
      <InputList props={{...inputProps}}/>
    </div>
  )
}

export default connect(({ newMemorialDay }) => ({ newMemorialDay }))(NewMemorialDay)
