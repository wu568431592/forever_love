import React from 'react'
import { connect } from 'dva'
import styles from './index.less'
import Title from '../../components/Title/index'

const Home = (home) => {
  console.log(home)

  let newMemorialDay = ()=>{
    console.log('new')
  }
  return (
    <div className={styles.home}>
      <Title title='我们的纪念日'>
        <i onClick={()=>{newMemorialDay()}}
           style={{ backgroundImage: 'url('+require('../../../assets/icons/new.svg')+')', backgroundSize: 'cover' }}
        />
      </Title>
    </div>
  )
}

export default connect(({ home }) => ({ home }))(Home)
