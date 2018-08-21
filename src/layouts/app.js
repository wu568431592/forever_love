import React from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import PropTypes from 'prop-types'
import MeTabBar from '../components/TabBar/index'
import { config } from '../utils/index'

import '../themes/index.less'
import './app.less'

const { openPages } = config

const App = ({ app, children, location }) => {
  console.log(app)
  let { pathname } = location
  if(openPages && openPages.includes(pathname)){
    return (
      <div>
        {children}
      </div>
    )
  }

  return (
    <div className='app'>
      {children}
      <MeTabBar />
    </div>

  )
}
App.propTypes = {
  children: PropTypes.element.isRequired,
  app: PropTypes.object,
  location: PropTypes.object,
}

export default withRouter(
  connect(
    ({ app }) => ({ app })
  )(App)
)
