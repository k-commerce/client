export default {
  state: {
    orderCheck: {}
  },
  getters: {
    getOrderCheck: state => state.orderCheck
  },
  mutations: {
    setOrderCheck (state, orderCheck) { state.orderCheck = orderCheck }
  }
}
