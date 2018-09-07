import React from 'react'
import { connect } from 'dva'
import { NavBar } from 'antd-mobile'
import styles from './index.less'
import Title from '../../components/Title/index'
import MemorialDayItem from  './components/memorialDayItem'
import * as routerRedux from "react-router-redux"



const Home = ({home, dispatch}) => {
  const { memorialDay } = home
  console.log(memorialDay)

  let newMemorialDay = ()=>{
    console.log('new')
    dispatch(routerRedux.push({
      pathname:'/newMemorialDay',
    }))
  }
  return (
    <div className={styles.home}>
      <NavBar style={{position:'fixed',width:'100%',top:'0px',left:'0px'}}>首页</NavBar>
      <Title title='我们的纪念日' style={{marginTop:'45px'}}>
        <i onClick={()=>{newMemorialDay()}}
           style={{ backgroundImage: 'url('+require('../../../assets/icons/new.svg')+')', backgroundSize: 'cover' }}
        />
      </Title>
      <div className={styles.memorialDay}>
        {
          memorialDay.map((val, key)=>{
            return(
              <MemorialDayItem props={{val:val}} key={key}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default connect(({ home }) => ({ home }))(Home)
