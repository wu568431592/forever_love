import { getMemorialDay, deleteMemorialDay } from '../../utils/request'
import { Toast } from 'antd-mobile'

export default {
  namespace: 'home',
  state: {
    memorialDay:[],
    gamesList:[
      {
        id:1,
        name:'你画我猜',
      },
      {
        id:2,
        name:'宠物养成',
      },
      {
        id:3,
        name:'飞机大战',
      },
    ],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/home' || pathname === '/') {
          dispatch({ type: 'getMemorialDay', payload:{ phone:localStorage.getItem('phone') } })
        }
      })
    },
  },
  effects: {
    * getMemorialDay ({ payload }, {call, put}){
      const data = yield  call(getMemorialDay,payload)
      if(data.code === 200){
        yield put({type:'updateState', payload: {memorialDay:data.data}})
      }
    },
    * handleDeleteMemorial ({payload},{call, put, select}){
      const data = yield  call(deleteMemorialDay,payload)
      const { memorialDay } = yield  select( _ => _.home)
      let index = ''
      memorialDay.map(function (val,key){
        if(val.id === payload.id){
          index = key
        }
        return 0
      })
      let list = memorialDay.slice(0)             //克隆一个纪念日列表
      list.splice(index,1)
      if(data.code === 200){
        Toast.success('删除成功~', 3, null, false)
        yield put({type:'updateState', payload: {memorialDay:list}})
      }
    },
  },

  reducers: {
    updateState (state, {payload}) {
      return {
        ...state,
        ...payload,
      }
    },
  },

}
