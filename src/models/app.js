import { routerRedux } from 'dva/router'

export default {
  namespace: 'app',
  state: {},
  subscriptions: {

  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' })
    },
    *changeSelect ( {payload},{ put }){
      yield put(routerRedux.push({
        pathname:'/'+payload.url,
      }))
    },
  },
  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    },
  },
}
