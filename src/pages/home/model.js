import { getMemorialDay } from '../../utils/request'
export default {
  namespace: 'home',

  state: {
    memorialDay:[
      {
        title:'我的生日',
        dateTime:'1993-03-14',
        nextTime:'2019-03-14',
        totalTime:'8050',
        countdown:'298',
      },
      {
        title:'她的生日',
        dateTime:'1993-03-31',
        nextTime:'2019-03-14',
        totalTime:'8050',
        countdown:'298',
      },
    ],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/home' || pathname === '/') {
          dispatch({ type: 'getMemorialDay', payload:{phone:localStorage.getItem('phone')} })
        }
      })
    },
  },
  effects: {
    * gowidth ({ payload }, { call, put, select }){
      const data = yield call()
      const { selectedRowKeys } = yield select(_ => _.user)
      if (data.success) {
        yield put({ type: 'updateState', payload: { selectedRowKeys: selectedRowKeys.filter(_ => _ !== payload) } })
      } else {
        throw data
      }
    },
    * getMemorialDay ({ payload }, {call, put}){
      const data = yield  call(getMemorialDay,payload)
      console.log(data)

      if(data.code === 200){
        yield put({type:'updateState', payload: {}})
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
