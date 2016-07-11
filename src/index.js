import Vue from 'vue'
import Alert from './Alert.vue'

module.exports = (
  options = {}
) => {
  // default options
  const defaults = {
    title: '',
    msg: '',
    icon: '',

    align: 'left',  // left, center, right
    autoCloseTimeout: 0, // auto close alert in mile second
    style: {
      padding: '20px',
      yesBtnColor: '',
      background: '#fff',
    },
    animate: 'fade',

    needNoBtn: false, // display no btn
    needCloseBtn: true, // display close btn
    yesBtnText: 'YES',
    noBtnText: 'NO',

    onClickYesBtn: () => ({}), // yes btn click handler
    onClickNoBtn: () => ({}), // no btn click handler
  }

  const AlertConstructor = Vue.extend(Alert)
  const alert = new AlertConstructor({
    data: Object.assign(defaults, options),
  })

  // append alert compoent to `body`
  alert.$mount().$appendTo('body')
}
