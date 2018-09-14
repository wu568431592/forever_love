
export default {
  namespace: 'newMemorialDay',

  state: {

  },

  effects: {

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
