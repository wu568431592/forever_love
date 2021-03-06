import React from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import PropTypes from 'prop-types'
import MeTabBar from '../components/TabBar/index'
import { config } from '../utils/index'
import { routerRedux } from 'dva/router'

import '../themes/index.less'
import './app.less'

const { openPages } = config

const App = ({ app, children, location, dispatch }) => {
  console.log(app)
  let { pathname } = location
  if(openPages && openPages.includes(pathname)){
    return (
      <div>
        {children}
      </div>
    )
  }
  const tabBarProps = {
    changeSelect (payload){
      dispatch(routerRedux.push({
        pathname:'/'+payload,
      }))
     // dispatch({ type: 'app/changeSelect',payload:{ url:payload } })
    },
    path:pathname,
  }

  return (
    <div className='app'>
      {children}
      <MeTabBar {...tabBarProps}/>
    </div>

  )
}
App.propTypes = {
  children: PropTypes.element.isRequired,
  app: PropTypes.object,
  location: PropTypes.object,
  dispatch:PropTypes.func,
}

export default withRouter(
  connect(
    ({ app }) => ({ app })
  )(App)
)
