import React from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import MeTabBar from '../components/tabBar/index'
import './app.less'


const App = ({ app}) => {

  return (
    <div className='app' id='app'>
      <MeTabBar/>
    </div>
  )
}

export default withRouter(
  connect(
    ({ app }) => ({ app })
  )(App)
)
