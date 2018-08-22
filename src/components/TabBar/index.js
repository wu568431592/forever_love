import React from 'react'
import { TabBar } from 'antd-mobile'


class MeTabBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'home',
      hidden: false,
      interActionBadge:'',
      loveMomentBadge:'',
    }
  }
  handleSelectChange = (payload)=>{
    this.setState({
      selectedTab:payload,
    })
    this.props.changeSelect(payload)
  }
  render () {
    return (
      <div className='TabBar_box' style={{ position: 'fixed', width: '100%', bottom: 0 }}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#e4393c"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={{uri: require('../../../assets/icons/unindex.svg')}}
            selectedIcon={{ uri : require('../../../assets/icons/index.svg') }}
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.handleSelectChange('home')
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{uri:require('../../../assets/icons/uninteraction.svg')}}
            selectedIcon={{uri:require('../../../assets/icons/interaction.svg')}}
            title="互动"
            key="interaction"
            badge={this.state.interActionBadge}
            selected={this.state.selectedTab === 'interaction'}
            onPress={() => {
              this.handleSelectChange('interaction')
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{uri:require('../../../assets/icons/unlove.svg')}}
            selectedIcon={{uri:require('../../../assets/icons/love.svg')}}
            title="恋爱圈"
            key="loveMoment"
            badge={this.state.loveMomentBadge}
            selected={this.state.selectedTab === 'loveMoment'}
            onPress={() => {
              this.handleSelectChange('loveMoment')
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: require('../../../assets/icons/unmy.svg') }}
            selectedIcon={{ uri: require('../../../assets/icons/my.svg') }}
            title="个人中心"
            key="myInfo"
            selected={this.state.selectedTab === 'myInfo'}
            onPress={() => {
              this.handleSelectChange('myInfo')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default  MeTabBar
