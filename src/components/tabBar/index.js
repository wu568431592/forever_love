import React from 'react'
import { TabBar } from 'antd-mobile';

class MeTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Index',
      hidden: false,
      interActionBadge:'',
      loveMomentBadge:'',
    };
  }
  render() {
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
            key="Index"
            icon={{uri: require('../../../assets/icons/unindex.svg')}}
            selectedIcon={{ uri : require('../../../assets/icons/index.svg') }}
            selected={this.state.selectedTab === 'Index'}
            onPress={() => {
              this.setState({
                selectedTab: 'Index',
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{uri:require('../../../assets/icons/uninteraction.svg')}}
            selectedIcon={{uri:require('../../../assets/icons/interaction.svg')}}
            title="互动"
            key="Interaction"
            badge={this.state.interActionBadge}
            selected={this.state.selectedTab === 'Interaction'}
            onPress={() => {
              this.setState({
                selectedTab: 'Interaction',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{uri:require('../../../assets/icons/unlove.svg')}}
            selectedIcon={{uri:require('../../../assets/icons/love.svg')}}
            title="恋爱圈"
            key="LoveMoment"
            badge={this.state.loveMomentBadge}
            selected={this.state.selectedTab === 'LoveMoment'}
            onPress={() => {
              this.setState({
                selectedTab: 'LoveMoment',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: require('../../../assets/icons/unmy.svg') }}
            selectedIcon={{ uri: require('../../../assets/icons/my.svg') }}
            title="个人中心"
            key="My"
            selected={this.state.selectedTab === 'My'}
            onPress={() => {
              this.setState({
                selectedTab: 'My',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default  MeTabBar
