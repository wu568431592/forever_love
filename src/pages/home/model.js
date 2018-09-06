
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
