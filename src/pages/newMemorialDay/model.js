
export default {
  namespace: 'newMemorialDay',

  state: {
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
