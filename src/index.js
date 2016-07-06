import Vue from 'vue'
import Modal from './Modal.vue'
import Icon from './correct.svg'

const ModalConstructor = Vue.extend(Modal)
const modal = new ModalConstructor({
  data: {
    title: 'OverWatch',
    needNoBtn: false,
    align: 'center',
    icon: Icon,
    msg: 'The World Needs Heros',
    style: {
      padding: '24px',
    },

    onClickYesBtn() {
      console.log('Yeeeeeep')
    },
    onClickNoBtn() {
      console.log('Noooooo')
    },
  },
})

modal.$mount('#root')
