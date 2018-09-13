import React from 'react'
import style from './index.less'


class Title extends React.Component{
  constructor (props) {
    super(props)
    this.state={

    }
  }

  render (){
    return (
      <div className={style.title}>
        <span className={style.left}></span>
        <p>{this.props.title}</p>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Title
