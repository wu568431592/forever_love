import React from 'react'
import styles from './index.less'

class gameListItem extends React.Component{
  constructor (props){
    super(props)
    this.state = {

    }
  }
  goGame (id){
    console.log(id)
  }
  render (){
    let { props } = this.props
    if(props){
      return(
        <div className={styles.gamesListItem}
             onClick={()=>{
               this.goGame(props.val.id)
             }}
        >
          <h4>{props.val.name}</h4>
          <p>进入游戏</p>
        </div>
      )
    }else{
      return(
        <div className={styles.gamesListItem}></div>
      )
    }


  }
}
export default gameListItem
