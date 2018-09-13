import React from 'react'
import { connect } from 'dva'
import { NavBar } from 'antd-mobile'
import styles from './index.less'
import Title from '../../components/Title/index'
import MemorialDayItem from  './components/memorialDayItem'
import * as routerRedux from "react-router-redux"



const Home = ({home, dispatch}) => {
  const { memorialDay,height } = home
  console.log( memorialDay )
  let newMemorialDay = ()=>{
    dispatch(routerRedux.push({
      pathname:'/newMemorialDay',
    }))
  }
  return (
    <div className={styles.home}>
      <NavBar style={{position:'fixed',width:'100%',top:'0px',left:'0px',zIndex:100}}>首页</NavBar>
      <div style={{position:'fixed',width:'100%',top:'45px',left:'0px',zIndex:100}}>
        <Title title='我们的纪念日'>
          <i onClick={()=>{newMemorialDay()}}
             style={{ backgroundImage: 'url('+require('../../../assets/icons/new.svg')+')', backgroundSize: 'cover' }}
          />
        </Title>
      </div>

        {memorialDay!==null ?
          (<div className={styles.memorialDay} style={{height:height}}>
            {
              memorialDay.map((val, key)=>{
                return(
                  <MemorialDayItem props={{val:val}} key={key}/>
                )
              })
            }
          </div>)
          :(<div></div>)
        }
    </div>
  )
}

export default connect(({ home }) => ({ home }))(Home)
