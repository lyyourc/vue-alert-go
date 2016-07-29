import Vue from 'vue'
import Alert from './Alert.vue'

let instance = null

module.exports = (
  options = {}
) => {
  if (instance && !instance.$$destroyed) return

  // default options
  const defaults = {
    title: '',
    msg: '',
    type: '', // [success, error]
    icon: '',

    align: 'left',  // left, center, right
    autoCloseTimeout: 0, // auto close alert in mile second
    animate: 'fade', // animation type, [fade, bound, slide]
    animateDuration: '0.2s',

    style: {
      box: {
        padding: '24px 20px',
        borderRadius: '2px',
        bgColor: '#fff',
      },
      yesBtnBgColor: '#2bb56f',
      textColor: '#656b78',
    },

    closeWhenClickMask: true, // click mask && close alert
    needNoBtn: false, // display no btn
    needCloseBtn: false, // display close btn
    needYesBtn: true,
    yesBtnText: 'YES',
    noBtnText: 'NO',

    onClickYesBtn: null, // yes btn click handler
    onClickNoBtn: null, // no btn click handler
    cbWhenClose: null, // callback when alert close
  }

  const AlertConstructor = Vue.extend(Alert)
  instance = new AlertConstructor({
    data: Object.assign(defaults, options),
  })

  // append alert compoent to `body`
  instance.$mount().$appendTo('body')
}
