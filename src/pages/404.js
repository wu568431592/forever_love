import React from 'react'
import { Icon } from 'antd'
// import { Page } from 'components'
import styles from './404.less'

const Error = () => (
  <div className={styles.error}>
    <Icon type="frown-o" />
    <h1>why 404 Not Found</h1>
  </div>
)

export default Error
