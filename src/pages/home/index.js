import React from 'react'
import { connect } from 'dva'
import { NavBar } from 'antd-mobile'
import styles from './index.less'
import Title from '../../components/Title/index'
import MemorialDayItem from  './components/memorialDayItem'
import * as routerRedux from "react-router-redux"


const Home = ({home, dispatch}) => {
  const { memorialDay,height } = home
  let newMemorialDay = ()=>{
    dispatch(routerRedux.push({
      pathname:'/newMemorialDay',
    }))
  }
  const onDelete = (id)=>{
    dispatch({
      type:'home/handleDeleteMemorial',
      payload:{
        id:id,
      },
    })
  }
  const onEdit = (payload)=>{
    dispatch(routerRedux.push({
      pathname:'/newMemorialDay',
      query:{
        ...payload,
      },
    }))
  }
  return (
    <div className={styles.home}>
      <NavBar style={{position:'fixed',width:'100%',top:'0px',left:'0px',zIndex:100}}>首页</NavBar>
      <div className={styles.home_main_box}>
        <Title title='我们的纪念日'>
          <i onClick={()=>{newMemorialDay()}}
             style={{ backgroundImage: 'url('+require('../../../assets/icons/new.svg')+')', backgroundSize: 'cover' }}
          />
        </Title>
        <div className={styles.memorialDay} style={{height:height}}>
          {
            memorialDay.map((val, key)=>{
              return(
                <MemorialDayItem
                  props={{
                    val:val,
                    onDelete:onDelete,
                    onEdit:onEdit,
                  }} key={key}/>
              )
            })
          }
        </div>
        <Title title='我们的小游戏'>
          <i onClick={()=>{newMemorialDay()}}
             style={{ backgroundImage: 'url('+require('../../../assets/icons/new.svg')+')', backgroundSize: 'cover' }}
          />
        </Title>
        <div className={styles.games_box}>
          games_box
        </div>
        <Title title='我们的相册'>
          <i onClick={()=>{newMemorialDay()}}
             style={{ backgroundImage: 'url('+require('../../../assets/icons/new.svg')+')', backgroundSize: 'cover' }}
          />
        </Title>
        <div className={styles.photos_box}>
          photos_box
        </div>
      </div>
    </div>
  )
}

export default connect(({ home }) => ({ home }))(Home)
