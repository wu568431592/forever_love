import { getMemorialDay } from '../../utils/request'
export default {
  namespace: 'home',

  state: {
    memorialDay:null,
    height:'',
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/home' || pathname === '/') {
          dispatch({ type: 'getMemorialDay', payload:{ phone:localStorage.getItem('phone') } })
          dispatch({type:'setHeight'})
        }
      })
    },
  },
  effects: {
    * getMemorialDay ({ payload }, {call, put}){
      const data = yield  call(getMemorialDay,payload)
      console.log(data)
      if(data.code === 200){
        yield put({type:'updateState', payload: {memorialDay:data.data}})
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
    setHeight ( state ){
      const bHeight = document.getElementsByTagName('html')[0].offsetHeight
      const height = bHeight-85-50-1
      return {
        ...state,
        height:height,
      }
    },
  },

}
