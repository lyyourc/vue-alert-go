import Vue from 'vue'
import Modal from './Modal.vue'

module.exports = (
  options = {}
) => {
  // default options
  const defaults = {
    title: '',
    msg: '',
    icon: '',

    align: 'left',  // left, center, right
    autoCloseTimeout: 0, // auto close modal in mile second

    needNoBtn: false, // display no btn
    needCloseBtn: true, // display close btn
    yesBtnText: 'YES',
    noBtnText: 'NO',

    onClickYesBtn: () => ({}), // yes btn click handler
    onClickNoBtn: () => ({}), // no btn click handler
  }

  const ModalConstructor = Vue.extend(Modal)
  const modal = new ModalConstructor({
    data: Object.assign(defaults, options),
  })

  // append modal compoent to `body`
  modal.$mount().$appendTo('body')
}
