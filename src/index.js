import Vue from 'vue'
import Modal from './Modal.vue'

const ModalConstructor = Vue.extend(Modal)
const modal = new ModalConstructor({
  data: {
    title: 'OverWatch',
    msg: 'The World Need Heros',
    style: {
      padding: '24px',
    },
  },
})

modal.$mount('#root')
