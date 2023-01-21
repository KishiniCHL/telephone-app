import { createStore } from 'vuex'

export default createStore({
  state: {
    // numbers: [1,2,3,4,5,6,7,8,9,0],
    currentNumber:[],
    contacts:[
      {
        name:'Lyndab',
        numero:'0612232323'
      },
      {
        name: 'Sara',
        numero:'0692334423'
      }
    ],
  },
  getters: {
  },
  mutations: {
    numberDisplay(state,number){
      state.currentNumber.push(number)
  },

    contactAdd(state,contact){
      state.contacts.push(contact)
    }
  },
  actions: {
  },
  modules: {
  }
})
