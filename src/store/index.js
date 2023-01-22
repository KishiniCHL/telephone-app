import { createStore } from 'vuex'

export default createStore({
  state: {
    // numbers: [1,2,3,4,5,6,7,8,9,0],
    currentNumber:[],
    contacts:[
      {
        name:'Lyndab',
        numero:'0612232323',
        time:'12:12',
        timestamp:null
      },
      {
        name: 'Sara',
        numero:'0692334423',
        time:'12:12',
        timestamp:null
      }
    ],
    // timestamp:null,
  },
  getters: {
  },
  mutations: {
    numberDisplay(state,number){
      state.currentNumber.push(number)
  },

    contactAdd(state,contact){
      state.contacts.push(contact)
    },

    callTimestamp(state){
      state.contacts.timestamp = new Date().toString()
  }
  },
  actions: {
  },
  modules: {
  }
})
