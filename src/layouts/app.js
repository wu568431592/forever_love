import React from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import MeTabBar from '../components/TabBar/index'
import { NavBar, Icon ,Button, Checkbox } from 'antd-mobile'

import '../themes/index.less'
import './app.less'


const App = ({ app }) => {
  console.log(app)
  return (
    <div className='app' id='app'>
      <NavBar
        mode="light"
        rightContent={[
          <Icon key="0" type="ellipsis" />,
        ]}
      >首页</NavBar>
      <Button type='primary'>123</Button>
      <Checkbox>123</Checkbox>
      <MeTabBar/>
    </div>
  )
}

export default withRouter(
  connect(
    ({ app }) => ({ app })
  )(App)
)
