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
      box: {
        padding: '24px 20px',
        borderRadius: '2px',
        bgColor: '#fff',
      },
      yesBtnBgColor: '',
      textColor: '#000',
    },
    animate: 'fade',
    animateDuration: '0.2s',

    needNoBtn: false, // display no btn
    needCloseBtn: false, // display close btn
    needYesBtn: true,
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
